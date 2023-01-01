// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAYeBFC_jkmRX1kDvSGw3Q0W_eK7QCvNg",
    authDomain: "todo-list-539be.firebaseapp.com",
    projectId: "todo-list-539be",
    storageBucket: "todo-list-539be.appspot.com",
    messagingSenderId: "463112581891",
    appId: "1:463112581891:web:355e2d357e69a75256af36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;