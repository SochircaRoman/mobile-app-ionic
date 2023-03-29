// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBWPewEuRmQAUVC_JMkvUa1JINudFs5Qn0",
  authDomain: "ionic-app-66239.firebaseapp.com",
  projectId: "ionic-app-66239",
  storageBucket: "ionic-app-66239.appspot.com",
  messagingSenderId: "398276321631",
  appId: "1:398276321631:web:b77a222e0be652a88096ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }