var position = 0;
var destinationType;
var width;

document.addEventListener("deviceready", onDeviceReady, false);

function swipe(direction = 0) {
  position += direction;
  if (position > 2) {
    position = 2
    }
  if (position < 0) {
    position = 0
  }
  $("#content").removeClass("position-" + 0);
  $("#content").removeClass("position-" + 1);
  $("#content").removeClass("position-" + 2);
  $("#content").addClass("position-" + position);

  $("#navHome").removeClass("activePage");
  $("#navAdd").removeClass("activePage");
  $("#navBirth").removeClass("activePage");
  $("#content").addClass("position-" + position);

  // $("nav section").removeClass("position-" + 0);
  // $("nav section").removeClass("position-" + 1);
  // $("nav section").removeClass("position-" + 2);
  // $("nav section").addClass("position-" + position);
}

function onDeviceReady() {
  $("nav").load("sites/nav.html", function () {
    $("#navHome").click(function () {
      position = 0;
      swipe();
    });
    $("#navAdd").click(function () {
      position = 1;
      swipe();
    });
    $("#navBirth").click(function () {
      position = 2;
      swipe();
    });
  });
  $("#home").load("sites/home.html");
  $("#add").load("sites/add.html");
  $("#birthday").load("sites/birthday.html");

  $("html").swipeleft(function () {
    swipe(1);
  });
  $("html").swiperight(function () {
    swipe(-1);
  });
}

function vibrate() {
  navigator.vibrate(500);
}
