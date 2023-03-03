 export function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const colorRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');

btnRef.addEventListener('click', () => {
	const randomColor = getRandomHexColor();
	bodyRef.style.backgroundColor = randomColor;
	colorRef.textContent = randomColor;
});
