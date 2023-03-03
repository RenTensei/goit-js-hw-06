const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
	if (inputRef.value.length === parseInt(inputRef.dataset.length)) {
		inputRef.classList.remove('invalid');
		inputRef.classList.add('valid');
	} else {
		inputRef.classList.remove('valid');
		inputRef.classList.add('invalid');
	}
});
