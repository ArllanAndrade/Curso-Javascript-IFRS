function passandoMouse(){
    document.getElementById('cores').style.backgroundColor="red";
    document.getElementById('log').innerHTML += "Passou mouse sobre div / cor: vermelho.<br>"
}

function tirandoMouse(){
    document.getElementById('cores').style.backgroundColor="blue";
    document.getElementById('log').innerHTML += "Tirou mouse da div / cor: azul.<br>"
}

function clicando(){
    document.getElementById('cores').style.backgroundColor="green";
    document.getElementById('log').innerHTML += "Clicou sobre div / cor: verde.<br>"
}

function soltandoBotaoMouse(){
    document.getElementById('cores').style.backgroundColor="yellow";
    document.getElementById('log').innerHTML += "Soltou botão do mouse sobre div / cor: amarelo.<br>"
}

function movimentandoMouse(){
    document.getElementById('cores').style.backgroundColor="purple";
    document.getElementById('log').innerHTML += "Movimentou mouse sobre div / cor: roxo.<br>"
}

function exemplo (){
    document.getElementById('cores');
}