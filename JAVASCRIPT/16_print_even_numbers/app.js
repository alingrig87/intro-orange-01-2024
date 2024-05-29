function printEvenFromMtoN() {
	var firstNumberInput = document.getElementById('first-number');
	var secondNumberInput = document.getElementById('second-number');

	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var resultParagraph = document.getElementById('result');
	resultParagraph.innerHTML = '';

	if (firstNumber % 2 === 1 && firstNumber === secondNumber) {
		resultParagraph.innerHTML = 'Nu exista nicio valoare de afisat';
		return;
	}

	for (var i = firstNumber; i <= secondNumber; i = i + 1) {
		if (i % 2 === 0) {
			resultParagraph.innerHTML = resultParagraph.innerHTML + ' ' + i;
		}
	}
}
