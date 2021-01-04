import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBaLUGaMgDCEifdInjCcpQ3IKWhgsGVmkM",
  authDomain: "robinhood-27f01.firebaseapp.com",
  projectId: "robinhood-27f01",
  storageBucket: "robinhood-27f01.appspot.com",
  messagingSenderId: "37871874427",
  appId: "1:37871874427:web:99a50737f6acba7d8a0dde",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
