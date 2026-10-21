// Firebase Authentication: Google and email/password. Only loaded on /login/ and /account/.
import {
  browserLocalPersistence,
  browserPopupRedirectResolver,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  initializeAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirebaseApp } from "./firebase-app.js";

// Lets every page show "Account" instead of "Log in" without loading the Auth SDK.
export const SIGNED_IN_KEY = "hsh-signed-in";

let auth;

export function getAuthInstance(config) {
  if (auth) return auth;
  auth = initializeAuth(getFirebaseApp(config), {
    persistence: browserLocalPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
  });
  onAuthStateChanged(auth, (user) => {
    try {
      if (user) localStorage.setItem(SIGNED_IN_KEY, "1");
      else localStorage.removeItem(SIGNED_IN_KEY);
    } catch {}
  });
  return auth;
}

export function whenReady(a) {
  return new Promise((resolve) => {
    const stop = onAuthStateChanged(a, (user) => {
      stop();
      resolve(user);
    });
  });
}

export function signInWithGoogle(a) {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return signInWithPopup(a, provider);
}

export function logIn(a, email, password) {
  return signInWithEmailAndPassword(a, email, password);
}

export async function signUp(a, name, email, password) {
  const cred = await createUserWithEmailAndPassword(a, email, password);
  if (name) await updateProfile(cred.user, { displayName: name });
  await sendEmailVerification(cred.user).catch(() => {});
  return cred;
}

export const resetPassword = (a, email) => sendPasswordResetEmail(a, email);
export const resendVerification = (user) => sendEmailVerification(user);
export const logOut = (a) => signOut(a);

const MESSAGES = {
  "auth/invalid-credential": "That email and password do not match.",
  "auth/wrong-password": "That email and password do not match.",
  "auth/user-not-found": "That email and password do not match.",
  "auth/invalid-email": "Enter a valid email address.",
  "auth/email-already-in-use": "There is already an account with that email. Log in instead.",
  "auth/weak-password": "Use at least 8 characters for your password.",
  "auth/too-many-requests": "Too many attempts. Wait a few minutes and try again.",
  "auth/network-request-failed": "No connection. Check your internet and try again.",
  "auth/popup-blocked": "Your browser blocked the Google window. Allow popups and try again.",
  "auth/account-exists-with-different-credential": "That email already uses a different sign in method.",
  "auth/operation-not-allowed": "This sign in method is not turned on yet.",
  "auth/unauthorized-domain": "Sign in is not set up for this address yet.",
};

export function authMessage(err) {
  if (err?.code === "auth/popup-closed-by-user" || err?.code === "auth/cancelled-popup-request") return "";
  return MESSAGES[err?.code] || "Something went wrong. Please try again.";
}
