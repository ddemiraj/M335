// -------------------------------------------------------------------
// Initialize Firebase - Anonymous
// -------------------------------------------------------------------
var output;

const firebaseConfig = {
    apiKey: "AIzaSyBia5ML5QQYKwxAMIugXAEHpLS4mA5mA5k",
    authDomain: "whoareyouagain-7e649.firebaseapp.com",
    databaseURL: "https://whoareyouagain-7e649-default-rtdb.firebaseio.com",
    projectId: "whoareyouagain-7e649",
    storageBucket: "whoareyouagain-7e649.appspot.com",
    messagingSenderId: "622763889310",
    appId: "1:622763889310:web:0432e3802098945810a18f"
  };
firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});