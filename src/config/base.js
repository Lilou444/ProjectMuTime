//var firebase = require("firebase");
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyArR4NEV9OZMVbqo2it7CXlp1Fn24DIbKs",
    authDomain: "mutime-da479.firebaseapp.com",
    databaseURL: "https://mutime-da479.firebaseio.com",
    projectId: "mutime-da479",
    storageBucket: "mutime-da479.appspot.com",
    messagingSenderId: "218843166640",
    appId: "1:218843166640:web:e6f04d7797ff5934958875",
    measurementId: "G-4Z40VCFQEV"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;