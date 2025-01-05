// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "real-estate-f517f.firebaseapp.com",
  projectId: "real-estate-f517f",
  storageBucket: "real-estate-f517f.firebasestorage.app",
  messagingSenderId: "777571387740",
  appId: "1:777571387740:web:082253012800a10df29999"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);