var selectet;
var ref = firebase.database().ref();

$(".insert").click(function () {
    alert("ininsert");
    var ref = firebase.database().ref('user/');
    ref.push({
        "birthday":     $('#birthday').val(),
        "contact":      $('#contact').val(),
        "firstname":    $('#firstname').val(),
        "name":         $('#name').val(),
        "picture":      $('#picture').val(),
        "remarks":      $('#remarks').val(),
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
