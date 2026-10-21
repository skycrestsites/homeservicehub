// Loaded on demand by the waitlist form.
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore/lite";
import { getFirebaseApp } from "./firebase-app.js";

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Returns "joined" or "already". The document id is a hash of list + email, so a repeat signup
// hits the rules' no-update clause instead of creating a duplicate.
export async function joinWaitlist(config, email, list) {
  const db = getFirestore(getFirebaseApp(config));
  const id = await sha256(`${list}:${email}`);
  try {
    await setDoc(doc(db, "waitlist", id), { email, list, createdAt: serverTimestamp() });
    return "joined";
  } catch (err) {
    if (err?.code === "permission-denied") return "already";
    throw err;
  }
}
