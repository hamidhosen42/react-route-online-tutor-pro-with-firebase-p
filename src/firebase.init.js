// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKWiRwS1N4tzMrwmggtOwPuVbE6oz2xwU",
  authDomain: "react-independent-service.firebaseapp.com",
  projectId: "react-independent-service",
  storageBucket: "react-independent-service.appspot.com",
  messagingSenderId: "423354332092",
  appId: "1:423354332092:web:3c195d8f38d375571531b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;