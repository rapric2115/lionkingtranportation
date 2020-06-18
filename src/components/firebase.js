import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5Aoqlt4UZw-GYm6y6Un-75s4hg8e8yvE",
    authDomain: "testingloginregisteruser.firebaseapp.com",
    databaseURL: "https://testingloginregisteruser.firebaseio.com",
    projectId: "testingloginregisteruser",
    storageBucket: "testingloginregisteruser.appspot.com",
    messagingSenderId: "100822621025",
    appId: "1:100822621025:web:b7e2cba820104493c38320"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;