/* Home Service Hub: shared site behavior. Bundled by lib/assets.js. */
import { initClarity } from "./modules/analytics.js";
import { initHeader } from "./modules/header.js";
import { initMarquee } from "./modules/marquee.js";
import { initDock, initSwipe } from "./modules/swipe.js";
import { initVideos } from "./modules/video.js";
import { initWaitlist } from "./modules/waitlist.js";

function readConfig() {
  try {
    return JSON.parse(document.getElementById("site-config")?.textContent || "{}");
  } catch {
    return {};
  }
}

// "Start the free course" becomes "Continue" once a guide is marked complete.
function initContinue() {
  let done = 0;
  try {
    done = JSON.parse(localStorage.getItem("hsh-progress-cleaning") || "[]").length;
  } catch {
    return;
  }
  if (!done) return;
  document.querySelectorAll("[data-continue] .label").forEach((el) => (el.textContent = "Continue the free course"));
}

// "Log in" becomes "Account" once signed in. Set by modules/auth.js, so no Auth SDK loads here.
function initAccountLink() {
  let signedIn = false;
  try {
    signedIn = localStorage.getItem("hsh-signed-in") === "1";
  } catch {
    return;
  }
  if (!signedIn) return;
  document.querySelectorAll("[data-account-link]").forEach((a) => {
    a.href = "/account/";
    (a.querySelector(".label") || a).textContent = "Account";
  });
}

const config = readConfig();
initAccountLink();
initHeader();
initVideos();
initMarquee();
initSwipe();
initDock();
initContinue();
initWaitlist(config.firebase);
if (config.production) initClarity(config.clarityId);
