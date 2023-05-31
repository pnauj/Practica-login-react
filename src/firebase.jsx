// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn5Z7x1UtSsF046tjF2b7K73cvJrvkXTA",
  authDomain: "fir-login-a7ae7.firebaseapp.com",
  projectId: "fir-login-a7ae7",
  storageBucket: "fir-login-a7ae7.appspot.com",
  messagingSenderId: "685024283576",
  appId: "1:685024283576:web:f2c418304198c150e49d4d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
