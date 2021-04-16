var {maths,informatique} = require("resultat_etdu.js");
// function affiche_result(){
	// if(gloabl){
		console.log("gloabl :"+gloabl);
		console.log("maths :"+maths);
		console.log("informatique :"+informatique);
		var average = (maths + informatique)/2;
		document.getElementById("moyenne").innerHTML = average;
		calcul_mention(average);
	// }
function calcul_mention(moy){
		if(moy < 10) document.getElementById("mention").innerHTML = "Insuffisant";
		else if(moy < 12) document.getElementById("mention").innerHTML = "Passable";
		else if(moy < 14) document.getElementById("mention").innerHTML = "Assez-bien";
		else if(moy < 16) document.getElementById("mention").innerHTML = "Bien";
		else if(moy < 18) document.getElementById("mention").innerHTML = "Tres-bien";
		else if(moy < 20) document.getElementById("mention").innerHTML = "Excellent";
}