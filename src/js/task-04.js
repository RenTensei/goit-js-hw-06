let counterValue = 0;

const displayedValue = document.querySelector('#value');
const counterRef = document.querySelector('#counter');

counterRef.addEventListener('click', handleClick);

function handleClick(e) {
	if (e.target.dataset.action === 'increment') {
		counterValue += 1;
		displayedValue.textContent = counterValue;
	} else if (e.target.dataset.action === 'decrement') {
		counterValue -= 1;
		displayedValue.textContent = counterValue;
	}
}
