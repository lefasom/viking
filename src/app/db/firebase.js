// ../db/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNayiVsWSfQF5LPTOOWWWgASSf47gqy7U",
  authDomain: "card-fa385.firebaseapp.com",
  projectId: "card-fa385",
  storageBucket: "card-fa385.firebasestorage.app",
  messagingSenderId: "821309970278",
  appId: "1:821309970278:web:8ce08782c02d8c1c8fdaa7",
  measurementId: "G-88G37WL760"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Verifica si la inicialización es exitosa

// Inicializa Firestore
export const db = getFirestore(app);
