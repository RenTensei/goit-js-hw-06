const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (e) => {
	inputRef.value === ''
		? (outputRef.textContent = 'Anonymous')
		: (outputRef.textContent = e.currentTarget.value);
});
