function printFrom1ToN() {
	var numberInput = document.getElementById('number');
	var number = Number(numberInput.value);

	var resultParagraph = document.getElementById('result');
	resultParagraph.innerHTML = '';

	for (var i = 1; i <= number; i = i + 1) {
		resultParagraph.innerHTML = resultParagraph.innerHTML + ' ' + i;
	}
}
