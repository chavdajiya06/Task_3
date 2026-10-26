import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfJ-IRXPAmypWk-DrrOAbeDf6ycCHU7ck",
  authDomain: "content-delivery-app-e396e.firebaseapp.com",
  projectId: "content-delivery-app-e396e",
  storageBucket: "content-delivery-app-e396e.firebasestorage.app",
  messagingSenderId: "608782035237",
  appId: "1:608782035237:web:261d56b4eb2bed7bac52cc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);