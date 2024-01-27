// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "photo-station-mern.firebaseapp.com",
  projectId: "photo-station-mern",
  storageBucket: "photo-station-mern.appspot.com",
  messagingSenderId: "665997556915",
  appId: "1:665997556915:web:253571d87cc8abf6da84c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);