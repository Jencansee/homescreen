const hdwq = document.querySelector('html'),
	error1 = document.querySelector('.errorMessage');
error1.addEventListener('click', () => hdwq.classList.add('missing'));
window.scriptError = val => { val ? error1.style.display = 'flex' : null; };