
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyAfLhN4QU9XEf0XWmjK198sf2f8j-7l9xM",
  authDomain: "proyecto-react-gonzalo.firebaseapp.com",
  projectId: "proyecto-react-gonzalo",
  storageBucket: "proyecto-react-gonzalo.appspot.com",
  messagingSenderId: "268076285395",
  appId: "1:268076285395:web:11007844f2c039c8064326"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)