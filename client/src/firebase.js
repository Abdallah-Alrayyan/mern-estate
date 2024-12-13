// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b2394.firebaseapp.com",
  projectId: "mern-estate-b2394",
  storageBucket: "mern-estate-b2394.firebasestorage.app",
  messagingSenderId: "37245013156",
  appId: "1:37245013156:web:44748dabc3d3e939eaea31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);