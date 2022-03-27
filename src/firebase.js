import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

const firebaseConfig = {
  apiKey: "AIzaSyBkLSkMqhARatEQklVoLGIDQHtqIRKNGSE",
  authDomain: "investmentsite-401ff.firebaseapp.com",
  projectId: "investmentsite-401ff",
  storageBucket: "investmentsite-401ff.appspot.com",
  messagingSenderId: "793087195116",
  appId: "1:793087195116:web:c0254dd8d5c0607fce32c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
