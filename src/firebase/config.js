// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxN3pD-J_vgspFn82xDHP0C7rIgfYMj8Y",
  authDomain: "react-cursos-2176d.firebaseapp.com",
  projectId: "react-cursos-2176d",
  storageBucket: "react-cursos-2176d.firebasestorage.app",
  messagingSenderId: "831766962162",
  appId: "1:831766962162:web:4fa14d80fc694b3fa7156b"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );