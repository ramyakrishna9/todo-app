import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyA3d56Xwzv-P4bZBkI_GN0m2wb0tuF3VWI",
    authDomain: "todo-app-c9dfa.firebaseapp.com",
    databaseURL: "https://todo-app-c9dfa.firebaseio.com",
    projectId: "todo-app-c9dfa",
    storageBucket: "todo-app-c9dfa.appspot.com",
    messagingSenderId: "200574949423",
    appId: "1:200574949423:web:2394645dcf90527deaceda",
    measurementId: "G-8ZJ15BE4XY"
});

const db = firebaseApp.firestore();
export { db };

