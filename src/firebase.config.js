// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANzxaL91fZkYexxGMMx8dZ9yYcNFDlzUw",
  authDomain: "online-job-portal-e1b17.firebaseapp.com",
  projectId: "online-job-portal-e1b17",
  storageBucket: "online-job-portal-e1b17.appspot.com",
  messagingSenderId: "440460418291",
  appId: "1:440460418291:web:19e8a759c987a2f97e6b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export {db,storage, auth};