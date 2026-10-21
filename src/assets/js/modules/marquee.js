// Endless banner: one measured set is cloned so the loop restarts on an identical frame.
const SPEED = 32; // pixels per second

export function initMarquee() {
  document.querySelectorAll(".marquee-track").forEach((track) => {
    const row = track.parentElement;
    const originals = [...track.children];

    const build = () => {
      track.classList.remove("is-running");
      track.querySelectorAll("[data-clone]").forEach((n) => n.remove());
      const setW = track.getBoundingClientRect().width;
      if (!setW) return;
      const copies = Math.max(1, Math.ceil(row.clientWidth / setW));
      for (let i = 0; i < copies; i++) {
        originals.forEach((el) => {
          const c = el.cloneNode(true);
          c.dataset.clone = "";
          c.setAttribute("aria-hidden", "true");
          track.appendChild(c);
        });
      }
      track.style.setProperty("--shift", `${setW}px`);
      track.style.setProperty("--dur", `${Math.round(setW / SPEED)}s`);
      void track.offsetWidth;
      track.classList.add("is-running");
    };

    build();
    document.fonts?.ready.then(build);
    let t;
    window.addEventListener("resize", () => {
      clearTimeout(t);
      t = setTimeout(build, 200);
    });
  });
}
