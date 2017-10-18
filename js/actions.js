/*
	Fonctionne avec actions.css
*/

function deploie_menu(id) {
   var div = document.getElementById(id);
   if(div.style.display == 'block')
		div.style.display = 'none';
   else
		div.style.display = 'block';
}

function deux_chiffres(input) {
	if(input.value.length === 1){
		input.value = "0" + input.value;
	}
}