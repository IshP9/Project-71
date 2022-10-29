import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDSP6wpOXIvewzpCCh0a8IFw9lg27TfhII",
    authDomain: "e-ride-64978.firebaseapp.com",
    projectId: "e-ride-64978",
    storageBucket: "e-ride-64978.appspot.com",
    messagingSenderId: "601767741411",
    appId: "1:601767741411:web:417ba975ec6bda757a42d6"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
