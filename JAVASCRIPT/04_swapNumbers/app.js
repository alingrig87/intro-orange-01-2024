function swapNumbers() {
	var firstNumberInput = document.getElementById('first-number');
	var firstNumber = Number(firstNumberInput.value);

	var secondNumberInput = document.getElementById('second-number');
	var secondNumber = Number(secondNumberInput.value);

	var resultParagraph = document.getElementById('result');
	resultParagraph.innerHTML =
		'Numerele inainte de a fi inversate:  ' + firstNumber + ' ' + secondNumber;

	var tmp = firstNumber;
	firstNumber = secondNumber;
	secondNumber = tmp;

	resultParagraph.innerHTML =
		resultParagraph.innerHTML +
		'<hr>' +
		'Numerele dupa ce au fost inverstate inversate:  ' +
		firstNumber +
		' ' +
		secondNumber;
}
