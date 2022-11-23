import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmoqL1hbYNz_CuzdZqMn8BjixZ92ld63M",
  authDomain: "sp2-fb.firebaseapp.com",
  projectId: "sp2-fb",
  storageBucket: "sp2-fb.appspot.com",
  messagingSenderId: "1093731608495",
  appId: "1:1093731608495:web:17a05939c0b2d6edbbf15a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveUser = (name, person, keyword) =>
    addDoc(collection(db, "users"), {name, person, keyword});
