export function initHeader() {
  const head = document.querySelector(".site-head");
  if (!head) return;

  const onScroll = () => head.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  initMenu(head);
  initDropdowns();
}

function initMenu(head) {
  const toggle = head.querySelector(".menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    if (open) menu.style.setProperty("--menu-top", `${Math.round(head.getBoundingClientRect().bottom)}px`);
    menu.classList.toggle("open", open);
    menu.inert = !open;
    document.documentElement.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.querySelector(".ic-open").hidden = open;
    toggle.querySelector(".ic-close").hidden = !open;
  };

  menu.inert = true;
  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  menu.querySelectorAll(".mm-toggle").forEach((btn) =>
    btn.addEventListener("click", () => {
      const open = btn.parentElement.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
    }),
  );
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && menu.classList.contains("open")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initDropdowns() {
  const drops = document.querySelectorAll(".dropdown");
  drops.forEach((dd) => {
    const btn = dd.querySelector("button");
    btn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });
  const closeAll = () =>
    drops.forEach((dd) => {
      dd.classList.remove("open");
      dd.querySelector("button")?.setAttribute("aria-expanded", "false");
    });
  document.addEventListener("click", closeAll);
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeAll());
}
