function umClique() {
	document.getElementById("imagem").src="img/imagem-exemplo-02.jpg";
	document.getElementById("log").innerHTML += "Troca para a imagem da <i>menina</i>.<br>";

	for (var i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}
}

function doisCliques() {
	document.getElementById("imagem").src="img/imagem-exemplo-01.jpg";
	document.getElementById("log").innerHTML += "Troca para a imagem do <i>celular</i>.<br>";	
}

// for (var i = 0; i < 9; i++) {
//    alert(i);
// }

function validateEmailAddress(email) {
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}
function validate() {
$("#result").text("");
var emailaddress = $("#email").val();
if (validateEmailAddress(emailaddress)) {
$("#result").text(emailaddress + " is valid :)");
$("#result").css("color", "green");
} else {
$("#result").text(emailaddress + " is not correct, please retry:(");
$("#result").css("color", "red");
}
return false;
}
$("#validate").bind("click", validate);
