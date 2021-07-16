function submeti(){
	document.getElementById('log').innerHTML += "Submeti.<br>";
	return false;
}

function resetei(){
	document.getElementById('log').innerHTML += "Resetei.<br>";
	return false;
}

function saiDoCampo(){
	document.getElementById('log').innerHTML += "Saí do campo.<br>";
	return false; //para a informação preenchida no form não ir para nenhum lugar.
}

function mudei(){
	document.getElementById('log').innerHTML += "Mudei.<br>";
}

function entreiNoCampo(){
	document.getElementById('log').innerHTML += "Entrei no campo.<br>";
}

function selecionei(){
	document.getElementById('log').innerHTML += "Selecionei.<br>";
}

function aperteiTecla(){
	document.getElementById('log').innerHTML += "Apertei tecla.<br>";
}

function solteiTecla(){
	document.getElementById('log').innerHTML += "Soltei tecla.<br>";
}