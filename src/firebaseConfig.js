// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUMoDHNQE0mwphLXSwHGO5OSNwjyx8KOM",
  authDomain: "reservas-65373.firebaseapp.com",
  projectId: "reservas-65373",
  storageBucket: "reservas-65373.appspot.com",
  messagingSenderId: "1062003798640",
  appId: "1:1062003798640:web:e9c661c297277828bcfab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Instancia de Firestore
const db = getFirestore();

export { db };

export default firebaseConfig;
