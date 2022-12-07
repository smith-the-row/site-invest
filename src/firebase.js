import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

const firebaseConfig = {
  apiKey: "AIzaSyDyVZRQcOQex3fz5fEfElyteSpF0syL8ks",
  authDomain: "coinsigalpro.firebaseapp.com",
  projectId: "coinsigalpro",
  storageBucket: "coinsigalpro.appspot.com",
  messagingSenderId: "979517913137",
  appId: "1:979517913137:web:051a1e0b598519ea783d10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
