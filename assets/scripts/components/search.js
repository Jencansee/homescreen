const engines = () => {
	return {
		g: ['https://google.com/search?q=', 'Google'],
		i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
		d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
		y: ['https://youtube.com/results?search_query=', 'Youtube'],
		w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
		m: ['https://developer.mozilla.org/en-US/search?q=', 'MDN']
	};
};

let fieldValue;
const searchk = e => {
	fieldValue = e.target.value;

	//console.log(e.keyCode)
	e.keyCode == 13 ? window.location = `https://duckduckgo.com/?q=${fieldValue}` : null;
};

export default searchk;