/* Course overview and player. Both render from window.COURSE. */
(function () {
  const course = window.COURSE;
  if (!course) return;

  const flat = [];
  course.categories.forEach((c, ci) => c.lessons.forEach((l, li) => flat.push({ ...l, ci, li })));
  const total = flat.length;
  const playerUrl = `${course.id}-guides.html`;

  const storeKey = `hsh-progress-${course.id}`;
  let done = new Set();
  try { done = new Set(JSON.parse(localStorage.getItem(storeKey) || "[]")); } catch (e) {}
  const save = () => { try { localStorage.setItem(storeKey, JSON.stringify([...done])); } catch (e) {} };

  const $ = (sel) => document.querySelector(sel);
  const arrow = (name = "arrow-right") => `<span class="dot"><span data-i="${name}"></span></span>`;
  const membersHref = () => window.HSH.LINKS.members || window.HSH.LINKS.discord;

  /* Overview page */
  function renderCatalog(el) {
    el.innerHTML = course.categories
      .map((c, ci) => `
        <div class="cat-card">
          <div class="cat-head">
            <span class="cat-num">${String(ci + 1).padStart(2, "0")}</span>
            <div><h3>${c.title}</h3><p>${c.desc}</p></div>
            <span class="cat-count">${c.lessons.length} guides</span>
          </div>
          <ul class="cat-list">
            ${c.lessons
              .map((l) => `
                <li>
                  <a href="${playerUrl}#${l.slug}" class="${done.has(l.slug) ? "is-done" : ""}">
                    <span class="g-num">${l.num}</span>
                    <span class="g-title">${l.title}</span>
                    <span class="g-tags"><span class="g-free"><span data-i="video"></span>Free</span><span class="g-lock"><span data-i="lock"></span>Detailed</span></span>
                  </a>
                </li>`)
              .join("")}
          </ul>
        </div>`)
      .join("");
    window.HSH.renderIcons(el);
    const start = flat.find((l) => !done.has(l.slug)) || flat[0];
    document.querySelectorAll("[data-continue]").forEach((a) => {
      a.href = `${playerUrl}#${start.slug}`;
      if (done.size) a.firstChild.textContent = "Continue the quick guides";
    });
  }

  /* Player */
  function initPlayer() {
    const sideEl = $("#course-modules");
    const side = $(".course-side");
    const backdrop = $(".course-backdrop");
    let current = 0;
    let track = "quick";

    const fromHash = () => {
      const slug = location.hash.replace(/^#/, "").split("/")[0];
      const idx = flat.findIndex((l) => l.slug === slug);
      return idx >= 0 ? idx : null;
    };

    function renderSidebar() {
      const openCats = new Set([...sideEl.querySelectorAll(".cs-module.open")].map((m) => m.dataset.ci));
      sideEl.innerHTML = course.categories
        .map((c, ci) => {
          const count = c.lessons.filter((l) => done.has(l.slug)).length;
          const lessons = c.lessons
            .map((l) => {
              const idx = flat.findIndex((f) => f.slug === l.slug);
              return `<button class="cs-lesson${done.has(l.slug) ? " done" : ""}" data-idx="${idx}" type="button">
                <span class="chk"><span data-i="check"></span></span>
                <span>${l.title}</span>
                <span class="dur">${l.num}</span>
              </button>`;
            })
            .join("");
          const cls = ["cs-module", openCats.has(String(ci)) ? "open" : "", count === c.lessons.length ? "done-all" : ""].join(" ");
          return `<div class="${cls}" data-ci="${ci}">
            <button class="cs-module-btn" type="button">
              <span class="num">${ci + 1}</span>
              <span class="ttl">${c.title}<small>${count} of ${c.lessons.length} complete</small></span>
              <span data-i="chevron-down"></span>
            </button>
            <div class="cs-lessons">${lessons}</div>
          </div>`;
        })
        .join("");

      sideEl.querySelectorAll(".cs-module-btn").forEach((b) =>
        b.addEventListener("click", () => b.parentElement.classList.toggle("open"))
      );
      sideEl.querySelectorAll(".cs-lesson").forEach((b) =>
        b.addEventListener("click", () => {
          track = "quick";
          go(Number(b.dataset.idx));
          closeSide();
        })
      );
      window.HSH.renderIcons(sideEl);

      const l = flat[current];
      sideEl.querySelectorAll(".cs-lesson").forEach((b) => b.classList.toggle("active", Number(b.dataset.idx) === current));
      sideEl.querySelector(`.cs-module[data-ci="${l.ci}"]`)?.classList.add("open");
    }

    function renderProgress() {
      const pct = Math.round((done.size / total) * 100);
      $("#progress-bar").style.width = pct + "%";
      $("#progress-text").textContent = `${done.size} of ${total} quick guides`;
      $("#progress-pct").textContent = pct + "%";
    }

    function videoBox(l) {
      return `<div class="lesson-video" data-video="${l.video || ""}">
        <button class="vsl-play" type="button" aria-label="Play video"><span data-i="play"></span></button>
        <div class="lv-caption"><b>Quick guide ${l.num}</b><span>${l.title}</span></div>
        <div class="vsl-soon">The video for this guide is being recorded. Read the written guide below.</div>
      </div>`;
    }

    function nudgeHtml(type) {
      if (type === "crewty") {
        return `<div class="nudge">
          <span class="nudge-icon"><img src="../assets/img/crewty-logo.png" alt=""></span>
          <div class="nudge-text"><b>Set it up while you read</b><span>Open Crewty in another tab and follow along. Every plan starts with a 7 day free trial.</span></div>
          <a class="pill pill-white pill-sm" href="${window.HSH.LINKS.crewty}" target="_blank" rel="noopener">Open Crewty${arrow()}</a>
        </div>`;
      }
      return `<div class="nudge">
        <span class="nudge-icon discord"><span data-i="discord"></span></span>
        <div class="nudge-text"><b>Questions on this guide?</b><span>Ask in #ask-questions on the Discord. Working owners answer for free.</span></div>
        <a class="pill pill-white pill-sm" href="${window.HSH.LINKS.discord}" target="_blank" rel="noopener">Open the Discord${arrow()}</a>
      </div>`;
    }

    function lockedHtml(l) {
      const items = ["Full length video lesson", ...l.detail, "Templates and downloads"];
      return `<div class="locked">
        <div class="locked-video">
          <span class="locked-badge"><span data-i="lock"></span>Members only</span>
        </div>
        <div class="locked-body">
          <span class="tag">Detailed guide ${l.num}</span>
          <h2>${l.title}, the full guide</h2>
          <p>The quick guide gives you the essentials. The detailed guide is the complete version, filmed and written in depth, for members.</p>
          <ul class="locked-list">${items.map((i) => `<li><span data-i="check-circle"></span>${i}</li>`).join("")}</ul>
          <div class="pill-row">
            <a class="pill pill-blue" href="${membersHref()}" target="_blank" rel="noopener">Become a member${arrow("lock")}</a>
            <button class="pill pill-ghost" type="button" data-to="quick">Read the free quick guide${arrow()}</button>
          </div>
        </div>
      </div>`;
    }

    function renderLesson() {
      const l = flat[current];
      const cat = course.categories[l.ci];
      const isDone = done.has(l.slug);
      document.title = `${l.title} | ${course.title} Course | Home Service Hub`;

      const quick = `
        ${videoBox(l)}
        <div class="prose">${l.body}</div>
        ${nudgeHtml(l.nudge || "discord")}
        <div class="lesson-actions">
          <button class="pill pill-ghost" type="button" id="prev" ${current === 0 ? "disabled" : ""}>Previous${arrow("arrow-left")}</button>
          <div class="pill-row">
            <button class="pill pill-ghost complete-btn${isDone ? " is-done" : ""}" type="button" id="complete">${isDone ? "Completed" : "Mark complete"}${arrow("check")}</button>
            ${current < total - 1
              ? `<button class="pill pill-blue" type="button" id="next">Next guide${arrow()}</button>`
              : `<a class="pill pill-blue" href="${window.HSH.LINKS.discord}" target="_blank" rel="noopener">Join the community${arrow()}</a>`}
          </div>
        </div>`;

      $("#lesson").innerHTML = `
        <div class="lesson-top">
          <div class="lesson-crumb"><a href="${course.id}.html">${course.title}</a><span data-i="chevron-right"></span>${cat.title}</div>
          <button class="pill pill-ghost pill-sm side-toggle" type="button" id="side-open">All guides${arrow("list")}</button>
        </div>
        <h1 class="lesson-title">${l.title}</h1>
        <p class="lesson-sub">${l.sub}</p>
        <div class="lesson-meta">
          <span><span data-i="file-text"></span>Guide ${l.num} of 19</span>
          <span><span data-i="clock"></span>${l.mins} min read</span>
          ${isDone ? '<span class="ok"><span data-i="check-circle"></span>Completed</span>' : ""}
        </div>
        <div class="track-switch" role="tablist" aria-label="Guide version">
          <button type="button" role="tab" data-to="quick" aria-selected="${track === "quick"}"><span data-i="video"></span>Quick guide<em>Free</em></button>
          <button type="button" role="tab" data-to="detailed" aria-selected="${track === "detailed"}"><span data-i="lock"></span>Detailed guide<em class="m">Members</em></button>
        </div>
        ${track === "quick" ? quick : lockedHtml(l)}
      `;
      window.HSH.renderIcons($("#lesson"));

      $("#lesson").querySelectorAll("[data-to]").forEach((b) =>
        b.addEventListener("click", () => {
          track = b.dataset.to;
          renderLesson();
          if (b.closest(".locked")) window.scrollTo({ top: 0 });
        })
      );
      $("#side-open").addEventListener("click", openSide);

      const vid = $("#lesson .lesson-video");
      vid?.querySelector(".vsl-play").addEventListener("click", () => {
        if (!l.video) return vid.classList.add("is-soon");
        vid.innerHTML = `<iframe src="${l.video}" title="${l.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      });

      if (track !== "quick") return;
      $("#prev").addEventListener("click", () => go(current - 1));
      $("#next")?.addEventListener("click", () => {
        done.add(l.slug);
        save();
        go(current + 1);
      });
      $("#complete").addEventListener("click", () => {
        if (done.has(l.slug)) done.delete(l.slug);
        else done.add(l.slug);
        save();
        renderSidebar();
        renderProgress();
        renderLesson();
      });
    }

    function go(idx) {
      if (idx < 0 || idx >= total) return;
      current = idx;
      history.replaceState(null, "", `#${flat[current].slug}`);
      renderSidebar();
      renderProgress();
      renderLesson();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function openSide() { side.classList.add("open"); backdrop.classList.add("open"); }
    function closeSide() { side.classList.remove("open"); backdrop.classList.remove("open"); }
    backdrop.addEventListener("click", closeSide);
    $("#side-close")?.addEventListener("click", closeSide);

    const h = fromHash();
    if (h !== null) current = h;
    else {
      const firstOpen = flat.findIndex((l) => !done.has(l.slug));
      current = firstOpen >= 0 ? firstOpen : 0;
    }
    if (/\/detailed$/.test(location.hash)) track = "detailed";
    go(current);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const catalog = $("#course-catalog");
    if (catalog) renderCatalog(catalog);
    if ($("#course-modules")) initPlayer();
  });
})();
