import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCkVQqokWs3_G6mm-prHhWqlHAlIPqI32A",
  authDomain: "jobselctionproject.firebaseapp.com",
  projectId: "jobselctionproject",
  storageBucket: "jobselctionproject.appspot.com",
  messagingSenderId: "690563932640",
  appId: "1:690563932640:web:d4fc3cb9d30423b591cb85",
  measurementId: "G-TK89301NT1"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;
