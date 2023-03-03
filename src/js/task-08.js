const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = formRef.elements.email.value;
	const password = formRef.elements.password.value;

	if (!password || !email) {
		alert('Все поля должны быть заполнены!');
	} else {
		const logInfo = {
			email: email,
			password: password,
		};
		console.log(logInfo);
	}

	formRef.reset();
});
