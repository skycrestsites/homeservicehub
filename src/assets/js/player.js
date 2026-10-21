// Entry for the free course player page. Loaded only on /courses/cleaning/guides/.
import { COURSE } from "./course/cleaning-data.js";
import { initCoursePlayer } from "./course/player.js";

const el = document.getElementById("player-config");
let config = {};
try {
  config = JSON.parse(el?.textContent || "{}");
} catch {
  config = {};
}

initCoursePlayer({ ...COURSE, introVideo: config.introVideo || "" }, config.links || {});
