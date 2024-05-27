function showOppositeNumber() {
	var numberInput = document.getElementById('number');
	var number = Number(numberInput.value);

	var oppositeNumber = number * -1;

	var resultParagraph = document.getElementById('result');
	resultParagraph.innerHTML = oppositeNumber;
}
