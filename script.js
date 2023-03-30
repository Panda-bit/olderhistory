	const options = document.querySelectorAll('.option');

	options.forEach(element => {
		element.addEventListener('click', event => {
			options.forEach(el => el.classList.remove('active'));
			event.target.closest('.option').classList.add('active');
		})
	});