// var identifiant ="identifiant";
// var mdp =
var value_user;
function check_user() {
  var callback = function(response) {
	 value_user = response;
	// console.log("val_ser "+value_ser);
 	};
 	var identifiant = document.getElementById('id_user').value;
	var mdp = document.getElementById('password').value;
 	var str = "php/connect_to_server.php?id_=" + identifiant; 
  	sendToServer(str, callback);
    console.log("val_ser "+value_ser);
	if(mdp ==value_user["passwd"]){
		window.location.assign("Accueil2.html");
	}
	else{
		alert("Mot de passe ou identifiant incorrecte.");
	}
}

function sendToServer(url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      callback(this.responseText);
    }
  };
  xhttp.open("GET", url, false);
  xhttp.send();
}