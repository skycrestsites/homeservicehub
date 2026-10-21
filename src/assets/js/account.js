// Entry for /login/ and /account/.
import {
  authMessage,
  getAuthInstance,
  logIn,
  logOut,
  resendVerification,
  resetPassword,
  signInWithGoogle,
  signUp,
  whenReady,
} from "./modules/auth.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function readConfig() {
  try {
    return JSON.parse(document.getElementById("site-config")?.textContent || "{}");
  } catch {
    return {};
  }
}

// Only same-site paths, so ?next= cannot send people to another site.
function nextPath() {
  const next = new URLSearchParams(location.search).get("next") || "";
  return /^\/(?!\/)[\w\-/#.?=&]*$/.test(next) ? next : "/account/";
}

function initLogin(auth) {
  const form = document.getElementById("auth-form");
  const msg = form.querySelector(".auth-msg");
  const submit = document.getElementById("auth-submit");
  const google = document.getElementById("google-btn");
  const fields = {
    name: form.querySelector("#auth-name"),
    email: form.querySelector("#auth-email"),
    password: form.querySelector("#auth-password"),
  };

  const say = (text, kind = "err") => {
    msg.textContent = text;
    msg.className = `auth-msg${text ? ` ${kind}` : ""}`;
  };
  const busy = (on) => {
    form.classList.toggle("is-busy", on);
    submit.disabled = on;
    google.disabled = on;
  };
  const done = () => location.replace(nextPath());

  const setMode = (mode) => {
    form.dataset.mode = mode;
    document.querySelectorAll("[data-only]").forEach((el) => (el.hidden = el.dataset.only !== mode));
    document.querySelector("[data-auth-title]").textContent = mode === "signup" ? "Create your account" : "Log in";
    submit.textContent = mode === "signup" ? "Create account" : "Log in";
    fields.password.autocomplete = mode === "signup" ? "new-password" : "current-password";
    say("");
  };
  document.querySelectorAll("[data-mode-to]").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.modeTo)));
  setMode(new URLSearchParams(location.search).get("mode") === "signup" ? "signup" : "login");

  google.addEventListener("click", async () => {
    busy(true);
    say("");
    try {
      await signInWithGoogle(auth);
      done();
    } catch (err) {
      say(authMessage(err));
      busy(false);
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = fields.email.value.trim().toLowerCase();
    const password = fields.password.value;
    const signup = form.dataset.mode === "signup";
    if (!EMAIL_RE.test(email)) return say("Enter a valid email address.");
    if (signup && password.length < 8) return say("Use at least 8 characters for your password.");
    if (!password) return say("Enter your password.");

    busy(true);
    say("");
    try {
      if (signup) await signUp(auth, fields.name.value.trim().slice(0, 80), email, password);
      else await logIn(auth, email, password);
      done();
    } catch (err) {
      say(authMessage(err));
      busy(false);
    }
  });

  document.getElementById("forgot").addEventListener("click", async () => {
    const email = fields.email.value.trim().toLowerCase();
    if (!EMAIL_RE.test(email)) return say("Enter your email above, then press Forgot password again.");
    try {
      await resetPassword(auth, email);
    } catch {
      // Same reply either way, so the form does not reveal which emails have accounts.
    }
    say("If that email has an account, a reset link is on its way.", "ok");
  });
}

function initAccount(auth, user) {
  const box = document.querySelector("[data-account]");
  const name = user.displayName || user.email.split("@")[0];
  box.querySelector("[data-name]").textContent = name;
  box.querySelector("[data-email]").textContent = user.email;
  box.querySelector("[data-initial]").textContent = name.charAt(0).toUpperCase();

  const password = user.providerData.some((p) => p.providerId === "password");
  const verify = box.querySelector("[data-verify]");
  verify.hidden = !password || user.emailVerified;
  verify.querySelector("button")?.addEventListener("click", async (e) => {
    e.currentTarget.disabled = true;
    try {
      await resendVerification(user);
      verify.querySelector("p").textContent = "Verification email sent. Check your inbox.";
    } catch {
      verify.querySelector("p").textContent = "Could not send it right now. Try again in a few minutes.";
    }
  });

  box.querySelector("[data-signout]").addEventListener("click", async () => {
    await logOut(auth);
    location.replace("/");
  });

  document.querySelector("[data-account-loading]").hidden = true;
  box.hidden = false;
}

async function start() {
  const auth = getAuthInstance(readConfig().firebase || {});
  const user = await whenReady(auth);

  if (document.getElementById("auth-form")) {
    if (user) location.replace(nextPath());
    else initLogin(auth);
  } else if (document.querySelector("[data-account]")) {
    if (!user) location.replace("/login/?next=/account/");
    else initAccount(auth, user);
  }
}

start();
