// Premium course reader. Lesson text lives in Firestore and the rules only let one account read it.
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { getAuthInstance, logOut, whenReady } from "./modules/auth.js";
import { getFirebaseApp } from "./modules/firebase-app.js";
import { renderIcons } from "./modules/icons.js";

const ALLOWED = "netspirestudios@gmail.com";

function readConfig() {
  try {
    return JSON.parse(document.getElementById("site-config")?.textContent || "{}");
  } catch {
    return {};
  }
}

function show(id) {
  document.getElementById(id).hidden = false;
}

function initReader(lessons) {
  const layout = document.querySelector(".course-layout");
  const side = document.querySelector(".course-side");
  const list = document.getElementById("premium-lessons");
  const article = document.getElementById("lesson");
  const tab = document.getElementById("side-tab");
  const backdrop = document.querySelector(".course-backdrop");
  const wide = window.matchMedia("(width > 900px)");

  const setCollapsed = (on) => {
    layout.classList.toggle("is-collapsed", on);
    side.inert = on && wide.matches;
    tab.setAttribute("aria-expanded", String(!on));
    tab.setAttribute("aria-label", on ? "Show the lessons" : "Hide the lessons");
  };

  const closeDrawer = () => {
    side.classList.remove("open");
    backdrop.classList.remove("open");
  };

  list.innerHTML = lessons
    .map(
      (l, i) => `<button type="button" class="cs-lesson" data-idx="${i}">
        <span class="num">${Number(l.num)}</span><span class="ttl">${l.title}</span>
      </button>`,
    )
    .join("");
  renderIcons(list);

  const render = (i) => {
    const l = lessons[i];
    document.title = `${l.title} | Premium | Home Service Hub`;
    history.replaceState(null, "", `#${l.slug}`);
    list.querySelectorAll(".cs-lesson").forEach((b, n) => b.classList.toggle("active", n === i));
    article.innerHTML = `
      <div class="lesson-top">
        <div class="lesson-crumb"><a href="/courses/cleaning/premium/">Premium</a><span data-i="chevron-right"></span>Lesson ${l.num}</div>
        <button class="btn btn-outline btn-sm side-toggle" type="button" id="side-open">All lessons<span data-i="arrow-right"></span></button>
      </div>
      <h1 class="lesson-title">${l.title}</h1>
      <div class="prose">${l.body}</div>`;
    renderIcons(article);
    article.querySelector("#side-open").addEventListener("click", () => {
      side.classList.add("open");
      backdrop.classList.add("open");
    });
    window.scrollTo({ top: 0, behavior: "auto" });
    if (!wide.matches) closeDrawer();
  };

  list.addEventListener("click", (e) => {
    const b = e.target.closest("[data-idx]");
    if (b) render(Number(b.dataset.idx));
  });
  tab.addEventListener("click", () => setCollapsed(!layout.classList.contains("is-collapsed")));
  backdrop.addEventListener("click", closeDrawer);
  document.getElementById("side-close").addEventListener("click", closeDrawer);
  wide.addEventListener("change", () => {
    side.inert = wide.matches && layout.classList.contains("is-collapsed");
    closeDrawer();
  });

  const slug = location.hash.replace(/^#/, "");
  const start = Math.max(0, lessons.findIndex((l) => l.slug === slug));
  render(start);
}

async function start() {
  const auth = getAuthInstance(readConfig().firebase || {});
  const user = await whenReady(auth);
  if (!user) {
    const next = `${location.pathname}${location.search}${location.hash}`;
    location.replace(`/login/?next=${encodeURIComponent(next)}`);
    return;
  }

  const email = (user.email || "").toLowerCase();
  if (email !== ALLOWED || !user.emailVerified) {
    document.getElementById("premium-loading").hidden = true;
    const gate = document.getElementById("premium-gate");
    gate.hidden = false;
    gate.querySelector("[data-msg]").textContent = !user.emailVerified
      ? "Verify your email first, then open the course again."
      : "This Premium course is not on your account.";
    gate.querySelector("[data-signout]").addEventListener("click", async () => {
      await logOut(auth);
      location.replace("/courses/cleaning/premium/");
    });
    return;
  }

  let lessons = [];
  try {
    const db = getFirestore(getFirebaseApp(readConfig().firebase));
    const snap = await getDocs(collection(db, "premiumLessons"));
    lessons = snap.docs.map((d) => d.data()).sort((a, b) => a.num.localeCompare(b.num));
  } catch {
    lessons = [];
  }
  document.getElementById("premium-loading").hidden = true;
  if (!lessons.length) {
    show("premium-gate");
    document.querySelector("#premium-gate [data-msg]").textContent = "The lessons are not available right now.";
    return;
  }
  show("premium-app");
  initReader(lessons);
}

start();
