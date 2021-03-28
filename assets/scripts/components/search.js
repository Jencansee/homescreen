const EnginesList = document.getElementById('search-engines'),
	Engines = {	
		d: ['https://duckduckgo.com/?q=', 'DuckDuckGo'],
		s: ['https://www.startpage.com/sp/search?q=', 'StartPage'],	
		w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
		y: ['https://youtube.com/results?search_query=', 'Youtube'],
		ya: ['https://yandex.ru/search/?text=', 'Yandex'],
		ch: ['https://4chansearch.com/?q=', '4chanSearch'],
		hh: ['https://hh.ru/search/vacancy?L_save_area=false&fromSearchLine=true&st=searchVacancy&text=', 'HeadHunter'],
		mdn: ['https://developer.mozilla.org/en-US/search?q=', 'MDN']
	};

// creates list of engines in search overlay
Object.keys(Engines).map(el => { 
	let engineAbr = document.createElement("LI");
	engineAbr.innerText = `!${el}`;
	EnginesList.appendChild(engineAbr);
});

// function that makes searching possible
let fieldValue;
const searchBar = e => {
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
		} 
		window.open(engine + splited.join(' ').substr(cutQuery).toString().replace(/\s+/gm, '%20'), '_blank');
	}
};

export default searchBar;