import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi5bQNEzE2V0lIWzrrQRhRR7dIIwxg_tQ",
  authDomain: "jobtestproject111.firebaseapp.com",
  projectId: "jobtestproject111",
  storageBucket: "jobtestproject111.appspot.com",
  messagingSenderId: "1061559076139",
  appId: "1:1061559076139:web:bcb2ca6153958846f4f16e",
  measurementId: "G-VSC62S8NNF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


            //data base  22 if data base not worked than use 222
      // apiKey: "AIzaSyC6ClYPdQpl_FCgDte6RqqMMrPHDXBpCng",
      // authDomain: "jobtestproject22.firebaseapp.com",
      // projectId: "jobtestproject22",
      // storageBucket: "jobtestproject22.appspot.com",
      // messagingSenderId: "648780823769",
      // appId: "1:648780823769:web:7d091dad50ef3b4e47d2c8",
      // measurementId: "G-194HS5VHJW"


          //data base 111 

          // apiKey: "AIzaSyDi5bQNEzE2V0lIWzrrQRhRR7dIIwxg_tQ",
          // authDomain: "jobtestproject111.firebaseapp.com",
          // projectId: "jobtestproject111",
          // storageBucket: "jobtestproject111.appspot.com",
          // messagingSenderId: "1061559076139",
          // appId: "1:1061559076139:web:bcb2ca6153958846f4f16e",
          // measurementId: "G-VSC62S8NNF"