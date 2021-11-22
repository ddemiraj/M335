var selectet;
var ref = firebase.database().ref();
ref.on("value", function (snapshot) {
  console.log(snapshot.val());

  $(".insert").focusout(function () {
    var ref = firebase.database().ref('user/');
    ref.push({
        "birthday":     $('#birthday').val(),
        "contact":      $('#contact').val(),
        "firstname":    $('#firstname').val(),
        "name":         $('#name').val(),
        "picture":      $('#picture').val(),
        "remarks":      $('#remarks').val(),
    })
  });
});

$(document).ready(function () {
    $('.datepicker').datepicker();
});
