import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCyLX06clJhVUmyrZ4WbK-JOcMLUw7offw",
    authDomain: "pomodoroclock-1b456.firebaseapp.com",
    projectId: "pomodoroclock-1b456",
    storageBucket: "pomodoroclock-1b456.appspot.com",
    messagingSenderId: "1040359433406",
    appId: "1:1040359433406:web:c9977e487cd36197c22aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };