function calculateMin(a, b) {
	var min;
	if (a < b) {
		min = a;
	} else {
		min = b;
	}
	return min;
}

function calculateMax(a, b) {
	var max;
	if (a > b) {
		max = a;
	} else {
		max = b;
	}
	return max;
}

function calculate() {
	var firstNumberInput = document.getElementById('first-number');
	var secondNumberInput = document.getElementById('second-number');

	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var min = calculateMin(firstNumber, secondNumber);
	var max = calculateMax(firstNumber, secondNumber);

	var resultParagraph = document.getElementById('result');

	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		resultParagraph.innerHTML =
			'Input invalid, va rugam sa introduceti 2 numere';
		resultParagraph.style.color = 'red';
		return;
	}

	if (min === max) {
		resultParagraph.innerHTML = 'Numerele sunt egale';
	} else {
		resultParagraph.innerHTML =
			'Valoarea minima este ' + min + '<br>' + 'Valoarea maxima este ' + max;
	}
	resultParagraph.style.color = 'green';
}
