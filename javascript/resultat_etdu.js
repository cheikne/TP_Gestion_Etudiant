var gloabl=false;
var identif;
// var maths;
// var informatique ;
function resultat_etdu() {
	identif = document.getElementById('etd').value;
	maths = document.getElementById('maths').value;
	informatique = document.getElementById('informatique').value;
	console.log("maths :"+maths);
		console.log("informatique :"+informatique);
		var average = (maths + informatique)/2;
	if(identif =="x180000625"){
		// var check = ((maths<0 || maths > 20) || (informatique<0 || informatique>20));
		// console.log("value of  :"+check);
		if(maths && informatique){
			gloabl =true;
			window.location.assign("Afficher_resultat_etdu.htm");
		}
		else{
			alert("Champ vide ou valeurs negatives");
		}
	}
}