var inicio = 2;
var fim = 30;
var todosPares = "Números pares: ";

while (inicio <= fim) {
	todosPares = todosPares + inicio + ", ";
	inicio = inicio + 2;
}
alert(todosPares);