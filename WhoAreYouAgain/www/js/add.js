var selectet;
var ref = firebase.database().ref();

$(".insert").click(function () {
    // console.log($('#inputForm').children('#firstname'));
    // console.log($('form').find('#inputForm').val());
    // console.log($('#inputForm').find('#firstname').val);
    var ref = firebase.database().ref('user/');
    ref.push({
        "birthday":     $('#inputForm').find('#birthday').val(),
        "contact":      $('#inputForm').find('#contact').val(),
        "firstname":    $('#inputForm').find('#firstname').val(),
        "name":         $('#inputForm').find('#name').val(),
        "picture":      $('#inputForm').find('#picture').val(),
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
  