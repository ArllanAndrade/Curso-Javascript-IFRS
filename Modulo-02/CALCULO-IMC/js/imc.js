function calculaIMC(){
    
    document.getElementById("peso").style.border = "inset 2px darkgrey";
    document.getElementById("peso").style.backgroundColor = "white";
    document.getElementById("altura").style.border = "inset 2px darkgrey";
    document.getElementById("altura").style.backgroundColor = "white";

    if(document.getElementById("peso").value == ""){
        alert("Preencha o peso");
        document.getElementById("peso").style.borderColor = "red";
        document.getElementById("peso").style.backgroundColor = "pink";
        document.getElementById("peso").focus();
        return false;
    }
    if(document.getElementById("altura").value == ""){
        alert("Preencha a altura");
        document.getElementById("altura").style.borderColor = "red";
        document.getElementById("altura").style.backgroundColor = "pink";
        document.getElementById("altura").focus();
        return false;
    }
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = peso / (altura*altura);
    alert("Seu IMC é: "+resultado);
    return true;

}