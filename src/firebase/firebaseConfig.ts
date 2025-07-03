import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCwZoGapbp4MFX4FqhdYKpCJ4q_x6_PRug",
    authDomain: "cryptocurrency-app-6bb6b.firebaseapp.com",
    projectId: "cryptocurrency-app-6bb6b",
    storageBucket: "cryptocurrency-app-6bb6b.firebasestorage.app",
    messagingSenderId: "201564113816",
    appId: "1:201564113816:web:0a48243aa3851533d379ed",
    measurementId: "G-ESB00L219Q"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
