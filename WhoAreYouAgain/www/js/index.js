// Global
// var globalvar = 'aaaabc';


 
// -------------------------------------------------------------------
// Initialize Firebase - Anonymous
// -------------------------------------------------------------------
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


setTimeout(function() {
    // -------------------------------------------------------------------
    // Firebase - Daten
    // -------------------------------------------------------------------
    var ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
            //console.log('getData');
            console.log(snapshot.val());
        },
        function(error) {
            console.log("Error: " + error.message);
        });

}, 1000);



document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {  // Document and device is ready
    loadHomepage();
}

function loadHomepage() {
    $('nav').load("sites/nav.html", function() {
        $('main').load("sites/home.html", function() {
            // $('#navHome').click(loadHomepage);
            $('#navAdd').click(loadAddpage);
            $('#navBirth').click(loadBirthdaypage);
            // $('body').on( "swiperight", loadAddpage );
        });
    });
}
function loadAddpage() {
    $('nav').load("sites/nav.html", function() {
        $('main').load("sites/add.html", function() {
            $('#navHome').click(loadHomepage);
            // $('#navAdd').click(loadAddpage);
            $('#navBirth').click(loadBirthdaypage);
        });
    });
}
function loadBirthdaypage() {
    $('nav').load("sites/nav.html", function() {
        $('main').load("sites/birthday.html", function() {
            $('#navHome').click(loadHomepage);
            $('#navAdd').click(loadAddpage);
            // $('#navBirth').click(loadBirthdaypage);
        });
    });
}
function vibrate() {
    navigator.vibrate(5000);
}



// $('element').click(function (e) {}); {
//     e.preventDefault();
//     $('main').load("s....,html", function () {
//         $.getScript;
//     }
// }