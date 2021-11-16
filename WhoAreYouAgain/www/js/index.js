// Global
// var globalvar = 'aaaabc';

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {  // Document and device is ready
    $('nav').load("sites/nav.html");
    $('main').load("sites/home.html");
    // document.getElementById("main").addEventListener("click", vibrate, true);
}

// function vibrate() {
//     navigator.vibrate(5000);
// }

// $('element').click(function (e) {}); {
//     e.preventDefault();
//     $('main').load("s....,html", function () {
//         $.getScript;
//     }
// }