import searchk from './search';
const q = (e) => document.querySelector(e),
	qq = (e) => document.querySelectorAll(e),      
	toolbar = document.getElementById('toolbar'),
	search = document.getElementById('search-wrapper'),
	searchField = document.getElementById('search');


const activate = (obj, item) => {
	qq(obj).forEach((i) => i.classList.remove('genzai'));
	q(item).classList.add('genzai');
};

//screen
const scrnActive = (obj, item) => {
	qq(obj).forEach((i) => i.classList.remove('available'));
	q(item).classList.add('available');
};

//click handler
toolbar.addEventListener('click', e => {
	let clk = e.target.dataset.suji;    
	if (0 > clk <= 10) {
		if (Number.isInteger(parseInt(clk)) ) {
			activate('#screen-suji > div', `#screen-suji div:nth-child(${clk})`);
			scrnActive('#screen-wrapper > div', `#screen-wrapper > div:nth-child(${clk})`);
		}
	}
});

//keypress handler
document.onkeypress = e => {
	if (e) {        
		let key = e.key,
			charCode = e.charCode;
		if (Number.isInteger(parseInt(key)) ) {
			activate('#screen-suji > div', `#screen-suji div:nth-child(${key})`);
			scrnActive('#screen-wrapper > div', `#screen-wrapper > div:nth-child(${key})`);
		}        
        
		// KeyHandler for search bar
		if (document.activeElement !== searchField && charCode == 115) {
			search.classList.toggle('open');
			searchField.focus();            
		}
	};
};

document.onkeydown = e => {



	//ESC key
	if (search.classList.contains('open') && e.keyCode == 27) {
		document.body.focus();
		search.classList.remove('open');
	}
};

searchField.onkeyup = e => searchk(e);