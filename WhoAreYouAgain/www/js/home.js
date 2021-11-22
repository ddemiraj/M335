var selectet;
var ref = firebase.database().ref();
ref.on("value", function (snapshot) {
  console.log(snapshot.val());
  data = snapshot.val();

  var template = Handlebars.compile(`
        {{#each user}}
          <li id="{{@key}}">
            <div class="singlePerson valign-wrapper collapsible-header"> {{name}}, {{firstname}}</div> 
            <div class="collapsible-body"> 

              <div class="input-field">
                <label class="active" for="firstname">Vorname</label>
                <input placeholder="Vorname" id="firstname" type="text" class="validate edit" value={{firstname}}/>
              </div>
              <div class="input-field">
                <label class="active" for="name">Name</label>
                <input placeholder="Name" id="name" type="text" class="validate edit" value={{name}}/>
              </div>
              <div class="input-field">
                <label class="active" for="contact">Kontakt</label>
                <input placeholder="Kontakt" id="contact" type="text" class="validate edit" value={{contact}}/>
              </div>
              <div class="input-field">
                <label class="active" for="birthday">Geburtstag</label>
                <input placeholder="Geburtstag" id="birthday" type="text" class="validate datepicker edit" value={{birthday}}/>
              </div>
              <div class="input-field">
                <label class="active" for="remarks">Bemerkungen</label>
                <input placeholder="Bemerkungen" id="remarks" type="text" class="validate edit" value={{remarks}}/>
              </div>
              <div class="input-field">
                <label class="active" for="picture">Bild</label>
                <input placeholder="Bild" id="picture" type="text" class="validate edit" value={{picture}}/>
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
    var value     = $(this).val();
    var id        = $(this).parent().parent().parent().attr("id");
    var ref = firebase.database().ref('user/' + id);
    console.log(attribute)
    ref.update({
      [attribute]: [value]
    })
  });
  $(".delete").click(function () {
    console.log(selectet)
    console.log(ref)
    firebase.database().ref("user/" + selectet).remove();
  });
});

// function () {
//     $(".singlePerson-header").on("taphold", function(){
//       $(this).hide();
//     })
//   }
$(document).ready(function () {
  $(".collapsible").collapsible();
  $("#modal1").modal();
  $('.datepicker').datepicker();
});
