// Rows marked [data-swipe] scroll sideways on phones. Dots follow the scroll position.
export function initSwipe() {
  document.querySelectorAll("[data-swipe]").forEach((row) => {
    const items = [...row.children];
    if (items.length < 2) return;

    const dots = document.createElement("div");
    dots.className = "swipe-dots";
    items.forEach((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", `Show item ${i + 1}`);
      if (i === 0) b.className = "on";
      b.addEventListener("click", () => row.scrollTo({ left: items[i].offsetLeft - items[0].offsetLeft, behavior: "smooth" }));
      dots.appendChild(b);
    });
    row.after(dots);

    const btns = [...dots.children];
    const update = () => {
      const start = items[0].offsetLeft;
      let idx = 0;
      let best = Infinity;
      items.forEach((it, i) => {
        const d = Math.abs(it.offsetLeft - start - row.scrollLeft);
        if (d < best) {
          best = d;
          idx = i;
        }
      });
      if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 4) idx = items.length - 1;
      btns.forEach((b, i) => b.classList.toggle("on", i === idx));
    };
    row.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
  });
}

// Bottom action bar on phones, shown once the hero is out of view and hidden at the footer.
export function initDock() {
  const dock = document.querySelector(".m-dock");
  if (!dock) return;
  const footer = document.querySelector(".footer");
  const onScroll = () => {
    const past = window.scrollY > window.innerHeight * 0.8;
    const atFooter = footer && footer.getBoundingClientRect().top < window.innerHeight;
    dock.classList.toggle("show", past && !atFooter);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
