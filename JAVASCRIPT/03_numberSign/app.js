function showNumberSign() {
	var numberInput = document.getElementById('number');
	var number = Number(numberInput.value);

	var resultParagraph = document.getElementById('result');

	if (number > 0) {
		resultParagraph.innerHTML = 'S-a introdus o valoare pozitiva';
	} else if (number < 0) {
		resultParagraph.innerHTML = 'S-a introdus o valoare negativa';
	} else {
		resultParagraph.innerHTML = 'S-a introdus o valoare nula';
	}
}
