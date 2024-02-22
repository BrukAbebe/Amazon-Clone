// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import  "firebase/compat/firestore" 
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "clone-f1af7.firebaseapp.com",
  projectId: "clone-f1af7",
  storageBucket: "clone-f1af7.appspot.com",
  messagingSenderId: "476328358059",
  appId: "1:476328358059:web:1688e924d261074f6b47ee"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
