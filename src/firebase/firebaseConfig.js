// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLkLiVuEOuu5L4aHw-Sdo2Xrpw--Tdago",
  authDomain: "bbddmultimedia.firebaseapp.com",
  projectId: "bbddmultimedia",
  storageBucket: "bbddmultimedia.appspot.com",
  messagingSenderId: "87348393138",
  appId: "1:87348393138:web:39c74e0407267e8f7885ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)