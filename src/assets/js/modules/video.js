// Intro videos. Plays a file or an embed (Vimeo, Bunny Stream, YouTube) in place of the poster and
// shows the end screen with the next steps when the video finishes.
const FILE_RE = /\.(mp4|webm|mov)(\?|#|$)/i;

export function initVideos(root = document) {
  root.querySelectorAll("[data-vsl]").forEach((box) => {
    if (box.dataset.bound) return;
    box.dataset.bound = "1";
    box.querySelector(".vsl-start")?.addEventListener("click", () => play(box));
    box.querySelector(".vsl-replay")?.addEventListener("click", () => {
      box.classList.remove("is-ended");
      play(box, true);
    });
  });

  if (root !== document) return;
  document.querySelectorAll("[data-play]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const box = document.getElementById(btn.dataset.play);
      if (!box) return;
      e.preventDefault();
      box.scrollIntoView({ behavior: "smooth", block: "center" });
      play(box);
    }),
  );
}

function play(box, restart = false) {
  const src = box.dataset.src;
  if (!src) {
    box.classList.add("is-soon", "is-ended");
    return;
  }
  const existing = box.querySelector("video, iframe");
  if (existing && !restart) return;
  existing?.remove();
  box._stopListening?.();
  box.classList.add("is-playing");
  if (FILE_RE.test(src)) playFile(box, src);
  else playEmbed(box, src);
}

function playFile(box, src) {
  const v = document.createElement("video");
  v.src = src;
  v.controls = true;
  v.autoplay = true;
  v.playsInline = true;
  v.setAttribute("controlslist", "nodownload");
  v.addEventListener("ended", () => box.classList.add("is-ended"));
  box.prepend(v);
  v.play().catch(() => {});
}

function playEmbed(box, src) {
  const url = new URL(src, location.href);
  url.searchParams.set("autoplay", "1");
  const host = url.hostname;
  if (host.includes("youtube")) {
    url.searchParams.set("enablejsapi", "1");
    url.searchParams.set("rel", "0");
    url.searchParams.set("origin", location.origin);
  }

  const frame = document.createElement("iframe");
  frame.src = url.href;
  frame.title = box.dataset.title || "Video";
  frame.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  box.prepend(frame);

  const origin = url.origin;
  const send = (msg) => frame.contentWindow?.postMessage(typeof msg === "string" ? msg : JSON.stringify(msg), origin);
  frame.addEventListener("load", () => {
    if (host.includes("vimeo")) send({ method: "addEventListener", value: "ended" });
    else if (host.includes("youtube")) send({ event: "listening", id: box.id });
    else send({ context: "player.js", version: "0.0.11", method: "addEventListener", value: "ended", listener: box.id });
  });

  const onMessage = (e) => {
    if (e.origin !== origin || e.source !== frame.contentWindow) return;
    let data = e.data;
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch {
        return;
      }
    }
    const ended =
      data?.event === "ended" ||
      (data?.event === "onStateChange" && data.info === 0) ||
      (data?.event === "infoDelivery" && data.info?.playerState === 0);
    if (ended) box.classList.add("is-ended");
  };
  window.addEventListener("message", onMessage);
  box._stopListening = () => window.removeEventListener("message", onMessage);
}
