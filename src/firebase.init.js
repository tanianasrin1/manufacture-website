
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'react-firebase-hooks/auth';
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2zDcw-kAn18qcdSeFb16zVmcjnvwCTEU",
  authDomain: "leptop-tools-bd.firebaseapp.com",
  projectId: "leptop-tools-bd",
  storageBucket: "leptop-tools-bd.appspot.com",
  messagingSenderId: "886327786074",
  appId: "1:886327786074:web:74af6ebe8be2a3925fb663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export  default auth;



