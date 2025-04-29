// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnpLw3cNfVviOBm4P6yc4t3Rpm8St6MhE",
  authDomain: "netflixgpt-8eac4.firebaseapp.com",
  projectId: "netflixgpt-8eac4",
  storageBucket: "netflixgpt-8eac4.firebasestorage.app",
  messagingSenderId: "186497653553",
  appId: "1:186497653553:web:11c566c3f66294ad25ee10",
  measurementId: "G-9042QGD216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();