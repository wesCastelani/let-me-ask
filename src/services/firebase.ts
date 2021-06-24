import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database'; 

var firebaseConfig = {
    apiKey: "AIzaSyB3YTJPx5rW2GwwXtbx4tvq9MCsMhQLZZM",
    authDomain: "let-me-ask-4b4d1.firebaseapp.com",
    databaseURL: "https://let-me-ask-4b4d1-default-rtdb.firebaseio.com",
    projectId: "let-me-ask-4b4d1",
    storageBucket: "let-me-ask-4b4d1.appspot.com",
    messagingSenderId: "381353776507",
    appId: "1:381353776507:web:9973cf5d24a7fe6c6d19de",
    measurementId: "G-QVM5GNSTTP"
  };

firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
 const dataBase = firebase.database();

 export {firebase, auth, dataBase}