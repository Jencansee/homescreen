import tabActivator from './utils/tabActivator';
import searchBar from './search';

const toolbar = document.getElementById('toolbar'),
	search = document.getElementById('search-wrapper'),
	searchField = document.getElementById('search');

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

//keypress handler
document.onkeypress = e => {
	if (e) {        
		let key = e.key;

		if (Number.isInteger(parseInt(key)) && document.activeElement !== searchField) {
			tabActivator('#screen-suji > div', `#screen-suji div:nth-child(${key})`, 'genzai');
			tabActivator('#screen-wrapper > div', `#screen-wrapper > div:nth-child(${key})`, 'available');
		}        
        
		// KeyHandler for search bar
		if (document.activeElement !== searchField && key.toUpperCase() == 'S') {
			search.classList.toggle('open');
			searchField.focus();
		}
	}
};

search.onkeydown = e => {
	//ESC key	
	if (search.classList.contains('open') && e.key == 'Escape') {
		search.classList.remove('open');
		searchField.blur();
	}
};

searchField.onkeyup = e => searchBar(e);