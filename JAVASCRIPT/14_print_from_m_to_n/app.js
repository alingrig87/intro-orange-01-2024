function printFromMtoN() {
	var firstNumberInput = document.getElementById('first-number');
	var secondNumberInput = document.getElementById('second-number');

	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var resultParagraph = document.getElementById('result');
	resultParagraph.innerHTML = '';

	if (secondNumber - firstNumber <= 1) {
		resultParagraph.innerHTML = 'Nu exista nicio valoare de afisat';
		return;
	}

	for (var i = firstNumber + 1; i <= secondNumber - 1; i = i + 1) {
		resultParagraph.innerHTML = resultParagraph.innerHTML + ' ' + i;
	}
}
