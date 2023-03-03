const createButtonRef = document.querySelector('[data-create]');
const destroyButtonRef = document.querySelector('[data-destroy]');
const controlsRef = document.querySelector('#controls');
const boxesRef = document.querySelector('#boxes');

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function createBoxes(amount) {
	let totalBoxesHTML = '';
	for (let i = 0; i < amount; i++) {
		const size = 30 + i * 10;
		const boxHTML = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
		totalBoxesHTML += boxHTML;
	}
	boxesRef.insertAdjacentHTML('beforeend', totalBoxesHTML);
}

destroyButtonRef.addEventListener('click', () => {
	boxesRef.innerHTML = '';
});

createButtonRef.addEventListener('click', () => {
	createBoxes(+controlsRef.children[0].value);
});
