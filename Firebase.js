// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPMd3-65fgwds7MlVFSDxsP5pFMN22Cjs",
  authDomain: "gestion-clientes-443fa.firebaseapp.com",
  projectId: "gestion-clientes-443fa",
  storageBucket: "gestion-clientes-443fa.firebasestorage.app",
  messagingSenderId: "586169756670",
  appId: "1:586169756670:web:af21be45581c45e9002eaf"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;