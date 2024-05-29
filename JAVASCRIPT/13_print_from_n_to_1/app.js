function printFromNto1() {
	var numberInput = document.getElementById('number');
	var number = Number(numberInput.value);

	var resultParagraph = document.getElementById('result');
	resultParagraph.innerHTML = '';

	for (var i = number - 1; i >= 0; i = i - 1) {
		resultParagraph.innerHTML = resultParagraph.innerHTML + ' ' + i;
	}
}
