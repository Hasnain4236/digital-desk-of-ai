import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBq5Zw1nv7UWPKiRCFOwNqD4bSpA5nDE6Y",
  authDomain: "digital-desk-of-ai.firebaseapp.com",
  projectId: "digital-desk-of-ai",
  storageBucket: "digital-desk-of-ai.firebasestorage.app",
  messagingSenderId: "236661341088",
  appId: "1:236661341088:web:1f8131e4d144df64e4c2c5",
  measurementId: "G-PED7QKML2Z",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Enable offline persistence (optional - helps with offline scenarios)
if (typeof window !== "undefined") {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === "failed-precondition") {
      console.log("Persistence failed: Multiple tabs open");
    } else if (err.code === "unimplemented") {
      console.log("Persistence not supported by browser");
    }
  });
}

// Initialize Analytics (only in browser)
const analytics =
  typeof window !== "undefined" ? isSupported().then((yes) => (yes ? getAnalytics(app) : null)) : null;

export { app, auth, db, storage, analytics };
