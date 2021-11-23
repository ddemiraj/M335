var selectet;
var ref = firebase.database().ref();

$(".insert").click(function () {
    console.log($('#inputForm').find('#picture').val);
    var ref = firebase.database().ref('user/');
    ref.push({
        "birthday":     $('#inputForm').find('#birthday').val(),
        "contact":      $('#inputForm').find('#contact').val(),
        "firstname":    $('#inputForm').find('#firstname').val(),
        "name":         $('#inputForm').find('#name').val(),
        "picture":      $('#inputForm').find('#pictureAdd').attr('src'),
        "remarks":      $('#inputForm').find('#remarks').val(),
    })

    $(':input','#inputForm')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .prop('checked', false)
        .prop('selected', false);
  });

$(document).ready(function () {
    $('.datepicker').datepicker();
});


//////////////////// Camera /////////////////////////
(function () {
    "use strict";
  
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
  
    function onDeviceReady() {
      destinationType = navigator.camera.DestinationType;
    };
    $(".pictureAdd").click(function () {
        navigator.camera.getPicture(success, onFail, {
            quality: 50, destinationType: destinationType.DATA_URL
        });
    });
    function success(imageData) {
        width = (screen.width * 0.9) + "px";
        $('#inputForm').find('#pictureAdd').attr('src', "data:image/jpeg;base64," + imageData);
        $('#inputForm').find('#pictureAdd').css({
            'display': "block", 'width': width, 'margin': 'auto'
        });
    }
    function onFail(message) {
    }
  
  })();
  