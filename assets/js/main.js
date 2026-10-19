/* Home Service Hub: shared site behavior */

// Every element with data-link="key" picks these up. "members" and "vsl" are still placeholders.
const LINKS = {
  discord: "https://discord.com/invite/learnhomeservices",
  facebook: "https://www.facebook.com/share/g/19tB2APsvj/",
  crewty: "https://crewty.com",
  crewtyPricing: "https://crewty.com/pricing",
  ios: "https://apps.apple.com/app/id6760047827",
  android: "https://play.google.com/store/apps/details?id=com.crewty.app",
  members: "",
  // Embed URL for the homepage video, e.g. "https://www.youtube.com/embed/VIDEO_ID"
  vsl: "",
};

const ICONS = {
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-left": '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  "check-circle": '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  play: { fill: true, d: '<path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z"/>' },
  star: { fill: true, d: '<path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95z"/>' },
  sparkles: '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z"/><path d="M20 3v4M22 5h-4"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  "map-pin": '<path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  "trending-up": '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  dollar: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  phone: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8M16 17H8M10 9H8"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
  "bar-chart": '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
  sidebar: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',
  quote: '<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.5-1.5 4-4 4.5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.5-1.5 4-4 4.5"/>',
  layout: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
  minus: '<path d="M5 12h14"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
  landmark: '<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z"/>',
  video: '<path d="m16 13 5.22 3.48a.5.5 0 0 0 .78-.42V7.94a.5.5 0 0 0-.75-.43L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
  "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',
  hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  verified: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  "graduation": '<path d="M21.42 10.92a1 1 0 0 0 0-1.84l-8.58-3.9a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8M12 17v4"/>',
  apple: { fill: true, d: '<path d="M16.37 12.73c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.23 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.39-2.85 1.42-2.92-.03-.01-2.72-1.04-2.71-4.13ZM13.79 5.1c.71-.87 1.2-2.07 1.06-3.27-1.03.04-2.28.69-3.02 1.55-.66.77-1.24 2-1.09 3.18 1.15.09 2.33-.58 3.05-1.46Z"/>' },
  "google-play": { fill: true, d: '<path d="M3.6 1.8c-.2.2-.3.6-.3 1v18.4c0 .4.1.8.3 1L13.9 12 3.6 1.8Zm11 11 2.9 2.9-11.6 6.6c-.4.2-.8.3-1.1.2l9.8-9.7Zm0-1.6L4.8 1.5c.3-.1.7 0 1.1.2l11.6 6.6-2.9 2.9Zm3.8-2.2 3 1.7c.9.5.9 1.3 0 1.8l-3 1.7-3.1-3.1 3.1-3.1Z"/>' },
  discord: { fill: true, d: '<path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.61 1.25a18.27 18.27 0 0 0-5.49 0 12.64 12.64 0 0 0-.62-1.25.08.08 0 0 0-.08-.04 19.74 19.74 0 0 0-4.88 1.52.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-1.99a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1-.01-.13c.13-.09.25-.19.37-.29a.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01c.12.1.25.2.37.29a.08.08 0 0 1-.01.13 12.3 12.3 0 0 1-1.87.89.08.08 0 0 0-.04.11c.36.7.77 1.36 1.23 1.99a.08.08 0 0 0 .08.03 19.84 19.84 0 0 0 6-3.03.08.08 0 0 0 .03-.06c.5-5.18-.84-9.67-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.09-2.15-2.42s.95-2.42 2.15-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.95 2.42-2.16 2.42Z"/>' },
  facebook: { fill: true, d: '<path d="M9.1 23.69v-7.98H6.63v-3.67H9.1v-1.58c0-4.09 1.85-5.98 5.86-5.98.4 0 .96.04 1.47.1.39.04.77.11 1.14.2v3.32a8.6 8.6 0 0 0-.65-.03 26.8 26.8 0 0 0-.73-.01c-.71 0-1.26.1-1.68.31-.28.14-.52.36-.68.62-.26.42-.37 1-.37 1.75v1.3h3.92l-.39 2.1-.29 1.57h-3.25v8.24C19.4 23.24 24 18.18 24 12.04c0-6.63-5.37-12-12-12S0 5.42 0 12.04c0 5.63 3.87 10.35 9.1 11.65Z"/>' },
};

function iconSvg(name) {
  const def = ICONS[name];
  if (!def) return "";
  const d = typeof def === "string" ? def : def.d;
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${d}</svg>`;
}

function renderIcons(root = document) {
  root.querySelectorAll("[data-i]").forEach((el) => {
    if (el.dataset.rendered) return;
    const name = el.dataset.i;
    const def = ICONS[name];
    if (!def) return;
    el.classList.add("i");
    if (typeof def === "object" && def.fill) el.classList.add("i-fill");
    el.innerHTML = iconSvg(name);
    el.dataset.rendered = "1";
  });
}

function applyLinks() {
  document.querySelectorAll("[data-link]").forEach((a) => {
    const url = LINKS[a.dataset.link] || (a.dataset.link === "members" ? LINKS.discord : "");
    if (!url) return;
    a.href = url;
    if (/^https?:/.test(url)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  });
}

function initHeader() {
  const head = document.querySelector(".site-head");
  const toggle = document.querySelector(".menu-btn");
  const menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("[data-i]").outerHTML = `<span data-i="${open ? "x" : "menu"}"></span>`;
      renderIcons(toggle);
      head?.classList.toggle("is-scrolled", open || window.scrollY > 40);
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
  }

  // Transparent over the hero, solid once you scroll, hidden while scrolling down.
  if (head && !head.classList.contains("solid")) {
    let last = 0;
    let timer;
    const update = () => {
      const y = window.scrollY || 0;
      head.classList.toggle("is-scrolled", y > 40 || menu?.classList.contains("open"));
      clearTimeout(timer);
      if (y > last && y > 160 && !menu?.classList.contains("open")) head.classList.add("is-hidden");
      else head.classList.remove("is-hidden");
      timer = setTimeout(() => head.classList.remove("is-hidden"), 1000);
      last = y;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  document.querySelectorAll(".dropdown").forEach((dd) => {
    const btn = dd.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.open").forEach((dd) => {
      dd.classList.remove("open");
      dd.querySelector("button")?.setAttribute("aria-expanded", "false");
    });
  });
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((wrap) => {
    const tabs = wrap.querySelectorAll('[role="tab"]');
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
        next.focus();
        select(next);
      });
    });
  });
}

function initTracks() {
  document.querySelectorAll("[data-track]").forEach((track) => {
    const id = track.id;
    const prev = document.querySelector(`[data-track-prev="${id}"]`);
    const next = document.querySelector(`[data-track-next="${id}"]`);
    const step = () => (track.firstElementChild?.getBoundingClientRect().width || 400) + 12;
    const update = () => {
      if (prev) prev.disabled = track.scrollLeft < 4;
      if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    };
    prev?.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next?.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
}

function initNotify() {
  document.querySelectorAll("form.notify").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.parentElement.querySelector(".notify-ok");
      form.reset();
      ok?.classList.add("show");
    });
  });
}

function initVideos() {
  document.querySelectorAll("[data-video]").forEach((box) => {
    const btn = box.querySelector(".vsl-play");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const src = box.dataset.video || LINKS[box.dataset.videoKey] || "";
      if (!src) {
        box.classList.add("is-soon");
        return;
      }
      const sep = src.includes("?") ? "&" : "?";
      box.innerHTML = `<iframe src="${src}${sep}autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      box.classList.add("is-playing");
    });
  });
}

// Hero slides: rotating headline with a progress bar under the active tab.
function initSlides() {
  const wrap = document.querySelector("[data-slides]");
  if (!wrap) return;
  const slides = [...wrap.querySelectorAll(".slide")];
  const nav = document.querySelector(".slide-nav");
  const tabs = nav ? [...nav.querySelectorAll("button")] : [];
  const ms = Number(wrap.dataset.interval) || 6000;
  if (nav) nav.style.setProperty("--slide-ms", ms + "ms");
  let i = 0;
  let timer;

  const show = (n) => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-on", k === i));
    tabs.forEach((t, k) => {
      const on = k === i;
      t.classList.toggle("is-on", on);
      t.setAttribute("aria-selected", String(on));
      const bar = t.querySelector(".sn-bar b");
      if (bar && on) {
        bar.style.animation = "none";
        void bar.offsetWidth;
        bar.style.animation = "";
      }
    });
  };
  const start = () => { clearInterval(timer); timer = setInterval(() => show(i + 1), ms); };
  const pause = () => { clearInterval(timer); nav?.classList.add("paused"); };
  const resume = () => { nav?.classList.remove("paused"); show(i); start(); };

  tabs.forEach((t, k) => t.addEventListener("click", () => { show(k); start(); }));
  const hero = wrap.closest(".hero") || wrap;
  hero.addEventListener("mouseenter", pause);
  hero.addEventListener("mouseleave", resume);
  document.addEventListener("visibilitychange", () => (document.hidden ? pause() : resume()));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { show(0); return; }
  show(0);
  start();
}

// Counts up numbers in the stats strip once it scrolls into view.
function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length || !("IntersectionObserver" in window)) return;
  const run = (el) => {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const t0 = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  els.forEach((el) => io.observe(el));
}

// Lightbox for the homepage video card.
function initVideoModal() {
  const openers = document.querySelectorAll("[data-video-open]");
  if (!openers.length) return;
  const modal = document.createElement("div");
  modal.className = "vmodal";
  modal.innerHTML = `<div class="vmodal-box"><button class="vmodal-close" type="button">Close <span data-i="x"></span></button></div>`;
  document.body.appendChild(modal);
  renderIcons(modal);
  const box = modal.querySelector(".vmodal-box");
  const close = () => { modal.classList.remove("open"); box.querySelector("iframe")?.remove(); document.body.style.overflow = ""; };
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".vmodal-close")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  openers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.dataset.video || LINKS[btn.dataset.videoKey || "vsl"] || "";
      if (!src) { btn.classList.add("is-soon"); setTimeout(() => btn.classList.remove("is-soon"), 2500); return; }
      const sep = src.includes("?") ? "&" : "?";
      box.insertAdjacentHTML("beforeend", `<iframe src="${src}${sep}autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`);
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
}
// Side swipe rows on phones: adds dots that follow the scroll position.
function initSwipe() {
  document.querySelectorAll("[data-swipe]").forEach((row) => {
    const items = [...row.children];
    if (items.length < 2) return;
    const dots = document.createElement("div");
    dots.className = "swipe-dots";
    dots.innerHTML = items.map((_, i) => `<button type="button" aria-label="Go to item ${i + 1}"${i ? "" : " class=\"on\""}></button>`).join("");
    row.after(dots);
    const btns = [...dots.children];
    const update = () => {
      const left = row.scrollLeft;
      let idx = 0, best = Infinity;
      items.forEach((it, i) => { const d = Math.abs(it.offsetLeft - row.offsetLeft - left - parseFloat(getComputedStyle(row).paddingLeft)); if (d < best) { best = d; idx = i; } });
      if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 4) idx = items.length - 1;
      btns.forEach((b, i) => b.classList.toggle("on", i === idx));
    };
    row.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
    btns.forEach((b, i) => b.addEventListener("click", () => row.scrollTo({ left: items[i].offsetLeft - items[0].offsetLeft, behavior: "smooth" })));
  });
}

// Bottom action bar on phones, shown once the hero is out of view.
function initDock() {
  const dock = document.querySelector(".m-dock");
  if (!dock) return;
  const footer = document.querySelector(".footer");
  const onScroll = () => {
    const past = window.scrollY > window.innerHeight * 0.7;
    const atFooter = footer && footer.getBoundingClientRect().top < window.innerHeight;
    dock.classList.toggle("show", past && !atFooter);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initFilters() {
  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const target = document.getElementById(group.dataset.filterGroup);
    const btns = group.querySelectorAll("[data-filter]");
    btns.forEach((b) =>
      b.addEventListener("click", () => {
        btns.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        const f = b.dataset.filter;
        target.querySelectorAll("[data-cat]").forEach((el) => {
          el.hidden = f !== "all" && el.dataset.cat !== f;
        });
      })
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderIcons();
  applyLinks();
  initHeader();
  initTabs();
  initTracks();
  initNotify();
  initVideos();
  initSlides();
  initCounters();
  initVideoModal();
  initFilters();
  initSwipe();
  initDock();
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
});

window.HSH = { renderIcons, iconSvg, LINKS };
