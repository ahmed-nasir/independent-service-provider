// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6xMwTxIVxWd45LF9mC0JVqhtiZccdOy4",
  authDomain: "independent-service-prov-fd50a.firebaseapp.com",
  projectId: "independent-service-prov-fd50a",
  storageBucket: "independent-service-prov-fd50a.appspot.com",
  messagingSenderId: "1045234347340",
  appId: "1:1045234347340:web:ef5dd1f1e531b6c6f173e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;