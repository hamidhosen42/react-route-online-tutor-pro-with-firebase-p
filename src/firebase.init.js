// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj6W9zCPR-rrIFNo3iwc214lH8Dexf1VE",
  authDomain: "react-service-provider.firebaseapp.com",
  projectId: "react-service-provider",
  storageBucket: "react-service-provider.appspot.com",
  messagingSenderId: "271672556521",
  appId: "1:271672556521:web:5e43a20ae33d143880a978",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;