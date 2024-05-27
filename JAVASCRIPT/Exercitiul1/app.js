function nextNumber() {
	var numberInput = document.getElementById('number');
	var number = Number(numberInput.value);

	var nextNumber = number + 1;

	var resultParagraph = document.getElementById('result');
	resultParagraph.innerHTML = nextNumber;
}
