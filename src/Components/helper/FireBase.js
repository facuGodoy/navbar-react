// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn8YNPRzs1hZmTKMliYlSR1s_RkeZbiSM",
  authDomain: "proyectoreact-ecomerce.firebaseapp.com",
  projectId: "proyectoreact-ecomerce",
  storageBucket: "proyectoreact-ecomerce.appspot.com",
  messagingSenderId: "28515487545",
  appId: "1:28515487545:web:d3cf28eb6046a1228062e8",
  measurementId: "G-74VYCJ0KDS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
