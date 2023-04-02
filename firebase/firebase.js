import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApTkTooWSc09P3-rc4uwAcvZi0zb9FKUg",
  authDomain: "unicorn-1ad14.firebaseapp.com",
  projectId: "unicorn-1ad14",
  storageBucket: "unicorn-1ad14.appspot.com",
  messagingSenderId: "36194370889",
  appId: "1:36194370889:web:d9746da1c277164a974698",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
