setTimeout(function () {
  // -------------------------------------------------------------------
  // Firebase - Daten
  // -------------------------------------------------------------------
  var ref = firebase.database().ref();
  ref.on(
    "value",
    function (snapshot) {
      console.log(snapshot.val());
      data = snapshot.val();

      //   var template = Handlebars.compile("{{#each user}}{{firstname}} {{name}} {{/each}} ");
      var template = Handlebars.compile(`
        <div>
            {{#each user}}
                <div>
                    {{name}} {{firstname}}
                </div> 
            {{/each}}
        </div>
      `);
      var compiledTemplate = template( data );
      $("#out").html(compiledTemplate);
    },
    function (error) {
      console.log("Error: " + error.message);
    }
  );
}, 1000);
