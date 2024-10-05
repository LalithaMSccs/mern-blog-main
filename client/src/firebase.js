// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-application-a0390.firebaseapp.com",
  projectId: "blog-application-a0390",
  storageBucket: "blog-application-a0390.appspot.com",
  messagingSenderId: "935756303365",
  appId: "1:935756303365:web:3cfdafd47e8229e0abe06c",
  measurementId: "G-P5YWY40PKF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);