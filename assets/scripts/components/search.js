const Engines = {	
	d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
	g: ['https://google.com/search?q=', 'Google'],	
	y: ['https://youtube.com/results?search_query=', 'Youtube'],
	w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
	hh: ['https://hh.ru/search/vacancy?L_save_area=false&fromSearchLine=true&st=searchVacancy&text=', 'HeadHunter'],
	mdn: ['https://developer.mozilla.org/en-US/search?q=', 'MDN']
};

let fieldValue;
function searchBar (e) {
	fieldValue = e.target.value;	
	
	let splited = fieldValue.split(' '),
		prefixKey = splited[0],
		engine = Engines['d'][0],
		cutQuery = 0;

	if (e.key == 'Enter') {
		if (prefixKey.indexOf('!') == 0) {
			engine = Engines[prefixKey.substr(1)][0];

			// loop checks how much should be cutted from start of the query string
			for (let i = 0; i < prefixKey.substr(1).length; i++) { 
				i <= 0 ? cutQuery += 3 : cutQuery += 1;
			}

			window.location = engine + splited.join(' ').substr(cutQuery).toString().replace(/\s+/gm, '%20');
		}
		
	}
}

export default searchBar;