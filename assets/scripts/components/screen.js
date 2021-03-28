import tabActivator from './utils/tabActivator';
import searchBar from './search';

const toolbar = document.getElementById('toolbar'),
	backdrop = document.querySelector('.backdrop'),
	modal = [...backdrop.children],
	searchField = document.getElementById('search');

// functions 
function closeModal() {
	backdrop.classList.remove('open');
	modal.forEach(el => el.style.display = 'none');
}

function openModal(childNum) {
	backdrop.classList.add('open');
	modal[childNum].style.display = 'block'; 
}


//click handler
toolbar.addEventListener('click', e => {
	let clk = e.target.dataset.suji;    
	if (0 > clk <= 10) {
		if (Number.isInteger(parseInt(clk)) ) {
			tabActivator('#screen-suji > div', `#screen-suji div:nth-child(${clk})`, 'genzai');
			tabActivator('#screen-wrapper > div', `#screen-wrapper > div:nth-child(${clk})`, 'available');
		}
	}
});


//onkeydown handler
window.onkeydown = e => {
	if (e) {        
		let key = e.key;
		
		// suji in toolbar
		if (Number.isInteger(parseInt(key)) && document.activeElement !== searchField) {
			tabActivator('#screen-suji > div', `#screen-suji div:nth-child(${key})`, 'genzai');
			tabActivator('#screen-wrapper > div', `#screen-wrapper > div:nth-child(${key})`, 'available');
		}        
        
		//	search bar
		if (document.activeElement !== searchField && key.toUpperCase() == 'S' && !backdrop.classList.contains('open')) {
			e.preventDefault(); // prevents to put first char inside of the input
			openModal(0);
			searchField.focus();
		}

		// settings, triggers on backtick key
		if (document.activeElement !== searchField && key == '`' && !backdrop.classList.contains('open')) {
			openModal(1);
			document.querySelector('.settings__current-city').textContent = window.localStorage.getItem('weatherCity');
		}

		// Escape!
		if (backdrop.classList.contains('open') && e.key == 'Escape') {
			closeModal();
			searchField.blur();
		}
	}
};

searchField.onkeyup = e => searchBar(e);