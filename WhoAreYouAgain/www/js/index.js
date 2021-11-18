// Global
// var globalvar = 'aaaabc';

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Document and device is ready
  $("nav").load("sites/nav.html", function () {
    loadHomepage();
  });
}

function loadHomepage() {

    $("main").load("sites/home.html", function () {
      $("#navAdd").click(loadAddpage);
      $("#navBirth").click(loadBirthdaypage);


      $("#navHome").addClass("activePage");
      $("#navAdd").removeClass("activePage");
      $("#navBirth").removeClass("activePage");
    
    //   setTimeout(() => { console.log("World!"); }, 2000);
      $("html").swiperight(function () {
        loadAddpage();
      });
    });
}
function loadAddpage() {
    $("main").load("sites/add.html", function () {
      $("#navHome").click(loadHomepage);
      $("#navBirth").click(loadBirthdaypage);

      $("#navHome").removeClass("activePage");
      $("#navAdd").addClass("activePage");
      $("#navBirth").removeClass("activePage");

      $("html").swipeleft(function () {
        loadHomepage();
      });
      $("html").swiperight(function () {
        loadBirthdaypage();
      });
  });
}
function loadBirthdaypage() {
    $("main").load("sites/birthday.html", function () {
      $("#navHome").click(loadHomepage);
      $("#navAdd").click(loadAddpage);

      $("#navHome").removeClass("activePage");
      $("#navAdd").removeClass("activePage");
      $("#navBirth").addClass("activePage");


      $("html").swipeleft(function () {
        loadAddpage();
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
