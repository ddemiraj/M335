setTimeout(function() {
    // -------------------------------------------------------------------
    // Firebase - Daten
    // -------------------------------------------------------------------
    var ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            $("#out").html(snapshot.val()["user"]["name"]);
        },
        function(error) {
            console.log("Error: " + error.message);
        });

}, 1000);
