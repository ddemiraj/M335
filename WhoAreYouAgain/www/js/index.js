// Global
// var globalvar = 'aaaabc';

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {  // Document and device is ready
    $('main').load("../page.html");
    document.getElementById("main").addEventListener("click", vibrate, true);
}

function vibrate() {
    navigator.vibrate(5000);
}

