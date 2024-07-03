// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5df40.firebaseapp.com",
  projectId: "mern-estate-5df40",
  storageBucket: "mern-estate-5df40.appspot.com",
  messagingSenderId: "654180224048",
  appId: "1:654180224048:web:eb7aa3f6a28ac1dfb1f1f5",
  measurementId: "G-R6ZPZ1MS3L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);