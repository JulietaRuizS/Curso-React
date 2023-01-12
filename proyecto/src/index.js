import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoRL4EDy1tm1Q0kXw2pUP3m2k6EAkEgdQ",
    authDomain: "caleuche-coderhouse.firebaseapp.com",
    projectId: "caleuche-coderhouse",
    storageBucket: "caleuche-coderhouse.appspot.com",
    messagingSenderId: "323383515140",
    appId: "1:323383515140:web:cf799cab546847b94cbd51",
    measurementId: "G-Z02YQQVB7W"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
