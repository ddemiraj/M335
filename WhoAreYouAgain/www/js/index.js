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



//////////////////// Camera /////////////////////////


(function () {
  "use strict";

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);

  function onDeviceReady() {
    destinationType = navigator.camera.DestinationType;
  };
  alert();
  $(".picture").click(function () {
    alert("hey, id like a picture!");
      navigator.camera.getPicture(success, onFail, {
          quality: 50, destinationType: destinationType.DATA_URL
      });
  });
  // $("#loeschen").click(function () {
  //     $('#bild').css({
  //         'display': "none"
  //     });
  //     $("#meldung").html('Bildanzeige gelöscht');
  // });
  // $("#speichern").click(function () {
  //     navigator.camera.getPicture(onSuccess2, onFail, {
  //         quality: 50, destinationType: destinationType.FILE_URI,
  //         saveToPhotoAlbum: true,
  //         encodingType: navigator.camera.EncodingType.PNG
  //     });
  // });
  function success(imageData) {
      success.log(imageData);
      width = (screen.width * 0.9) + "px";
      $('#bild').attr('src', "data:image/jpeg;base64," + imageData);
      $('#bild').css({
          'display': "block", 'width': width, 'margin': 'auto'
      });
      var ref = firebase.database().ref('user/' + id);
      ref.update({
        "picture": "data:image/jpeg;base64," + imageData
      })
  }
  function onFail(message) {
      $('#bild').css({
          'display': "none"
      });
  }

})();
