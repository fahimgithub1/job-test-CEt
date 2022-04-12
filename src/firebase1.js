// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCkVQqokWs3_G6mm-prHhWqlHAlIPqI32A",
  authDomain: "jobselctionproject.firebaseapp.com",
  databaseURL: "https://jobselctionproject-default-rtdb.firebaseio.com",
  projectId: "jobselctionproject",
  storageBucket: "jobselctionproject.appspot.com",
  messagingSenderId: "690563932640",
  appId: "1:690563932640:web:d4fc3cb9d30423b591cb85",
  measurementId: "G-TK89301NT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// export const db = getFirestore(app)
