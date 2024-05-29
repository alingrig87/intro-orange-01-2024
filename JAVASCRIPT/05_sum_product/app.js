function add(a, b) {
	var sum = a + b;
	return sum;
}

function multiply(a, b) {
	var product = a * b;
	return product;
}

function calculate() {
	var firstNumberInput = document.getElementById('first-number');
	var secondNumberInput = document.getElementById('second-number');

	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var sum = add(firstNumber, secondNumber);
	var product = multiply(firstNumber, secondNumber);

	var resultParagraph = document.getElementById('result');
	resultParagraph.innerHTML =
		'Suma este: ' +
		'<span class="red">' +
		sum +
		'</span>' +
		'<br>' +
		'Produsul este ' +
		'<span class="red">' +
		product +
		'</span>';
}
