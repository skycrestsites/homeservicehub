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

  const sub = document.querySelector("[data-auth-sub]");
  const intro = sub.textContent;
  const MODES = {
    login: { title: "Log in", button: "Log in", sub: intro },
    signup: { title: "Create your account", button: "Create account", sub: intro },
    reset: { title: "Reset your password", button: "Send reset link", sub: "Enter the email you signed up with and we will send you a link to set a new password." },
  };
  const setMode = (mode) => {
    form.dataset.mode = mode;
    document.querySelectorAll("[data-only]").forEach((el) => (el.hidden = !el.dataset.only.split(" ").includes(mode)));
    document.querySelector("[data-auth-title]").textContent = MODES[mode].title;
    sub.textContent = MODES[mode].sub;
    submit.textContent = MODES[mode].button;
    fields.password.autocomplete = mode === "signup" ? "new-password" : "current-password";
    say("");
    (mode === "reset" ? fields.email : null)?.focus();
  };
  document.querySelectorAll("[data-mode-to]").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.modeTo)));
  const startMode = new URLSearchParams(location.search).get("mode");
  setMode(MODES[startMode] ? startMode : "login");

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
    const mode = form.dataset.mode;
    const signup = mode === "signup";
    if (!EMAIL_RE.test(email)) return say("Enter a valid email address.");
    if (mode === "reset") return sendReset(email);
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

  async function sendReset(email) {
    busy(true);
    say("");
    try {
      await resetPassword(auth, email, `${location.origin}/login/`);
    } catch (err) {
      if (err?.code === "auth/too-many-requests" || err?.code === "auth/network-request-failed") {
        busy(false);
        return say(authMessage(err));
      }
      // Any other error gets the same reply, so the form does not reveal which emails have accounts.
    }
    busy(false);
    say(`If ${email} has an account, a reset link is on its way. Check your inbox and spam folder.`, "ok");
  }
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
