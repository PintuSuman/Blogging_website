import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';
 
const firebaseConfig = {
    apiKey: "AIzaSyBh8nl9PLTA0otHPUA1JToHQoM7zikN3q0",
    authDomain: "react-blog-app-4a8bc.firebaseapp.com",
    projectId: "react-blog-app-4a8bc",
    storageBucket: "react-blog-app-4a8bc.appspot.com",
    messagingSenderId: "787257882230",
    appId: "1:787257882230:web:77155525ad808012ef5157",
    measurementId: "G-59KRJQ4LSG"
  };

  const app = initializeApp(firebaseConfig);

  const auth=getAuth(app);
  const db=getFirestore(app);
  const storage=getStorage(app);
  

  export{auth ,db,storage}