// Loaded on demand by the waitlist form. The web config is public by design; access is limited by
// firestore.rules, App Check and the API key's HTTP referrer restriction.
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore/lite";

let db;

function connect(config) {
  if (db) return db;
  const app = initializeApp({
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    appId: config.appId,
  });
  if (config.appCheckSiteKey) {
    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(config.appCheckSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  }
  db = getFirestore(app);
  return db;
}

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Returns "joined" or "already". The document id is a hash of list + email, so a repeat signup
// hits the rules' no-update clause instead of creating a duplicate.
export async function joinWaitlist(config, email, list) {
  const store = connect(config);
  const id = await sha256(`${list}:${email}`);
  try {
    await setDoc(doc(store, "waitlist", id), { email, list, createdAt: serverTimestamp() });
    return "joined";
  } catch (err) {
    if (err?.code === "permission-denied") return "already";
    throw err;
  }
}
