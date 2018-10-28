const sizePicker = document.getElementById('sizePicker'),
	pixelCanvas = document.getElementById('pixelCanvas'),
	colorPicker = document.getElementById('colorPicker');
let selectedColor = colorPicker.value;

// Select color input
colorPicker.addEventListener('input', function (event) {
	selectedColor = colorPicker.value;
})

// Select size input
sizePicker.addEventListener('submit', function (event) {
	let form = event.target;

	event.preventDefault();
	makeGrid(form.inputHeight.value, form.inputWidth.value);
})

/**
* @description Draws a grid of a given size
* @param {number} height
* @param {number} width
*/
function makeGrid(height, width) {
	while (pixelCanvas.firstChild) {
	    pixelCanvas.removeChild(pixelCanvas.firstChild);
	}

	for (let i = 0; i < height; i++) {
		let tableRow = document.createElement('tr');

		for (let j = 0; j < width; j++) {
			let tableData = document.createElement('td');

			tableData.addEventListener('click', function (event) {
				event.target.style.backgroundColor = selectedColor;
			})
			tableRow.appendChild(tableData);
		}
		pixelCanvas.appendChild(tableRow);
	}
}
