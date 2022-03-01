import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDddWscMjdghLc1SiWwVYGDpJonNQkGl9Y",
    authDomain: "instagram-app-9dcd8.firebaseapp.com",
    projectId: "instagram-app-9dcd8",
    storageBucket: "instagram-app-9dcd8.appspot.com",
    messagingSenderId: "1057053356575",
    appId: "1:1057053356575:web:8e95da2e3d5942044cdb2a",
    measurementId: "G-6FJNHCHF6E"
  });

  const db=firebaseApp.firestore();


  const auth=firebase.auth();

  const storage=firebase.storage();

  export  {db, auth, storage};
