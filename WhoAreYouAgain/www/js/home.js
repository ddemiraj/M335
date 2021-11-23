var selectet;
var ref = firebase.database().ref();

ref.on("value", function (snapshot) {
  data = snapshot.val();

  var template = Handlebars.compile(`
        {{#each user}}
          <li id="{{@key}}">
            <div class="singlePerson valign-wrapper collapsible-header"> {{name}} {{firstname}}</div> 
            <div class="collapsible-body"> 

              <div class="input-field">
                <label class="active" for="firstname">Vorname</label>
                <input placeholder="Vorname" id="firstname" type="text" class="validate edit" value="{{firstname}}">
              </div>
              <div class="input-field">
                <label class="active" for="name">Name</label>
                <input placeholder="Name" id="name" type="text" class="validate edit" value="{{name}}">
              </div>
              <div class="input-field">
                <label class="active" for="contact">Kontakt</label>
                <input placeholder="Kontakt" id="contact" type="text" class="validate edit" value="{{contact}}">
              </div>
              <div class="input-field">
                <label class="active" for="birthday">Geburtstag</label>
                <input placeholder="Geburtstag" id="birthday" type="date" class="validate edit" value="{{birthday}}">
              </div>
              <div class="input-field">
                <label class="active" for="remarks">Bemerkungen</label>
                <input placeholder="Bemerkungen" id="remarks" type="text" class="validate edit" value="{{remarks}}">
              </div>
              <div class="picture input-field">
                <label class="active" for="picture">Bild</label>
                <img src="{{picture}}" id="picture" class="edit" type="picture" alt="No picture available">
              </div>
            </div>
          </li>
        {{/each}}
        <script> $(".singlePerson, .collapsible-body").on("taphold", function () {
          selectet = $(this).parent().attr('id')
          $('#modal1').modal('open');
        }); </script>

        
      `);

  var compiledTemplate = template(data);
  $("#out").html(compiledTemplate);

  $(".edit").focusout(function () {
    var attribute = $(this).attr("id").toString();
    var value = $(this).val();
    var id = $(this).parent().parent().parent().attr("id");
    var ref = firebase.database().ref("user/" + id);
    ref.update({
      [attribute]: [value],
    });
  });

  $(".delete").click(function () {
    firebase
      .database()
      .ref("user/" + selectet)
      .remove();
    vibrate();
  });

  //////////////////// Camera /////////////////////////

  (function () {
    "use strict";

    document.addEventListener("deviceready", onDeviceReady.bind(this), false);

    function onDeviceReady() {
      destinationType = navigator.camera.DestinationType;
    }

    $(".picture").click(function () {
      var id = $(this).parent(id).parent().attr("id");
      navigator.camera.getPicture(function (imageData) {
        success(imageData, id)
      }, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
      });
    });
    function success(imageData, id) {
      width = screen.width * 0.9 + "px";
      var ref = firebase.database().ref("user/" + id);
      ref.update({
        picture: "data:image/jpeg;base64," + imageData,
      });
    }
    function onFail(message) {
      $("#bild").css({
        display: "none",
      });
    }
  })();
});

$(document).ready(function () {
  $(".collapsible").collapsible();
  $("#modal1").modal();
});
