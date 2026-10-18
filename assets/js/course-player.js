/* Course player: renders window.COURSE into the sidebar and lesson pane */
(function () {
  const course = window.COURSE;
  if (!course) return;

  const storeKey = `hsh-progress-${course.id}`;
  const flat = [];
  course.modules.forEach((m, mi) => m.lessons.forEach((l, li) => flat.push({ ...l, mi, li, key: `${mi}-${li}` })));

  const $ = (sel) => document.querySelector(sel);
  const sideEl = $("#course-modules");
  const side = $(".course-side");
  const backdrop = $(".course-backdrop");

  let done = new Set();
  try { done = new Set(JSON.parse(localStorage.getItem(storeKey) || "[]")); } catch (e) {}
  const save = () => { try { localStorage.setItem(storeKey, JSON.stringify([...done])); } catch (e) {} };

  let current = 0;
  const fromHash = () => {
    const m = location.hash.match(/^#lesson-(\d+)-(\d+)$/);
    if (!m) return null;
    const idx = flat.findIndex((l) => l.key === `${m[1]}-${m[2]}`);
    return idx >= 0 ? idx : null;
  };

  function renderSidebar() {
    sideEl.innerHTML = course.modules
      .map((m, mi) => {
        const lessons = m.lessons
          .map((l, li) => {
            const key = `${mi}-${li}`;
            const idx = flat.findIndex((f) => f.key === key);
            return `<button class="cs-lesson${done.has(key) ? " done" : ""}" data-idx="${idx}" type="button">
              <span class="chk"><span data-i="check"></span></span>
              <span>${l.title}</span>
              <span class="dur">${l.duration}</span>
            </button>`;
          })
          .join("");
        const count = m.lessons.filter((_, li) => done.has(`${mi}-${li}`)).length;
        return `<div class="cs-module" data-mi="${mi}">
          <button class="cs-module-btn" type="button">
            <span class="num">${String(mi + 1).padStart(2, "0")}</span>
            <span class="ttl">${m.title}<small>${count} of ${m.lessons.length} complete</small></span>
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
        go(Number(b.dataset.idx));
        closeSide();
      })
    );
    window.HSH.renderIcons(sideEl);
    markActive();
  }

  function markActive() {
    const lesson = flat[current];
    sideEl.querySelectorAll(".cs-lesson").forEach((b) => b.classList.toggle("active", Number(b.dataset.idx) === current));
    const mod = sideEl.querySelector(`.cs-module[data-mi="${lesson.mi}"]`);
    if (mod) mod.classList.add("open");
  }

  function renderProgress() {
    const pct = Math.round((done.size / flat.length) * 100);
    $("#progress-bar").style.width = pct + "%";
    $("#progress-text").textContent = `${done.size} of ${flat.length} lessons`;
    $("#progress-pct").textContent = pct + "%";
  }

  function nudgeHtml(type) {
    if (type === "crewty") {
      return `<div class="nudge">
        <span class="crewty-mark"><img src="../assets/img/crewty-logo.png" alt="" width="28" height="28"></span>
        <div><b>Run this inside Crewty</b><span>The scheduling, quoting and invoicing tool most owners in our community use.</span></div>
        <a class="btn btn-white btn-sm" href="${window.HSH.LINKS.crewty}" target="_blank" rel="noopener">Try Crewty <span data-i="arrow-right"></span></a>
      </div>`;
    }
    return `<div class="nudge">
      <span class="comm-logo"><span data-i="discord"></span></span>
      <div><b>Stuck on this lesson?</b><span>Ask in the Discord. Pros answer questions in the help channels for free.</span></div>
      <a class="btn btn-discord btn-sm" href="${window.HSH.LINKS.discord}">Join the Discord</a>
    </div>`;
  }

  function renderLesson() {
    const l = flat[current];
    const mod = course.modules[l.mi];
    const isDone = done.has(l.key);
    document.title = `${l.title} | ${course.title} Course | Home Service Hub`;

    $("#lesson").innerHTML = `
      <div class="lesson-top">
        <div class="lesson-crumb">Module ${l.mi + 1}<span data-i="chevron-right"></span>${mod.title}</div>
        <button class="btn btn-secondary btn-sm side-toggle" type="button" id="side-open"><span data-i="sidebar"></span>Lessons</button>
      </div>
      <h1 class="lesson-title">${l.title}</h1>
      <div class="lesson-meta">
        <span><span data-i="book-open"></span>Lesson ${l.mi + 1}.${l.li + 1}</span>
        <span><span data-i="clock"></span>${l.duration}</span>
        ${isDone ? '<span style="color:#0b7a4f"><span data-i="check-circle"></span>Completed</span>' : ""}
      </div>
      <div class="lesson-video">
        <div class="inner">
          <div class="pm-play"><span data-i="play"></span></div>
          <p>Video lesson coming soon. Read the written lesson below.</p>
        </div>
      </div>
      <div class="prose">${l.body}</div>
      ${l.takeaways && l.takeaways.length ? `<div class="takeaways">
        <h4><span data-i="target"></span>Key takeaways</h4>
        <ul>${l.takeaways.map((t) => `<li><span data-i="check-circle"></span>${t}</li>`).join("")}</ul>
      </div>` : ""}
      ${nudgeHtml(l.nudge || "discord")}
      <div class="lesson-actions">
        <button class="btn btn-secondary" type="button" id="prev" ${current === 0 ? "disabled" : ""}><span data-i="arrow-left"></span>Previous</button>
        <div class="btn-row">
          <button class="btn btn-secondary complete-btn${isDone ? " is-done" : ""}" type="button" id="complete">
            <span data-i="${isDone ? "check-circle" : "check"}"></span>${isDone ? "Completed" : "Mark complete"}
          </button>
          ${current < flat.length - 1
            ? '<button class="btn btn-primary" type="button" id="next">Next lesson<span data-i="arrow-right"></span></button>'
            : '<a class="btn btn-primary" href="../index.html#community">Finish and join the community<span data-i="arrow-right"></span></a>'}
        </div>
      </div>
    `;
    window.HSH.renderIcons($("#lesson"));

    $("#prev").addEventListener("click", () => go(current - 1));
    $("#next")?.addEventListener("click", () => {
      done.add(l.key);
      save();
      go(current + 1);
    });
    $("#complete").addEventListener("click", () => {
      if (done.has(l.key)) done.delete(l.key);
      else done.add(l.key);
      save();
      renderSidebar();
      renderProgress();
      renderLesson();
    });
    $("#side-open").addEventListener("click", openSide);
  }

  function go(idx) {
    if (idx < 0 || idx >= flat.length) return;
    current = idx;
    const l = flat[current];
    history.replaceState(null, "", `#lesson-${l.mi}-${l.li}`);
    renderSidebar();
    renderProgress();
    renderLesson();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function openSide() { side.classList.add("open"); backdrop.classList.add("open"); }
  function closeSide() { side.classList.remove("open"); backdrop.classList.remove("open"); }
  backdrop.addEventListener("click", closeSide);
  $("#side-close")?.addEventListener("click", closeSide);

  document.addEventListener("DOMContentLoaded", () => {
    const h = fromHash();
    if (h !== null) current = h;
    else {
      const firstOpen = flat.findIndex((l) => !done.has(l.key));
      current = firstOpen >= 0 ? firstOpen : 0;
    }
    go(current);
  });
})();
