import * as firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth";

const config  = {
    apiKey: "AIzaSyDXvfb_st75xAYiS_Z3qaAUICogdark4Vw",
    authDomain: "nonews-fd795.firebaseapp.com",
    databaseURL: "https://nonews-fd795.firebaseio.com",
    projectId: "nonews-fd795",
    storageBucket: "nonews-fd795.appspot.com",
    messagingSenderId: "972937228395",
    appId: "1:972937228395:web:7574f10e69efc92c"
};

export default firebase.initializeApp(config)



