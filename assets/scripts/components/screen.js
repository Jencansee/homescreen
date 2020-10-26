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
            activate('#screen-suji > div', `#screen-suji div:nth-child(${clk})`)
            scrnActive('#screen-wrapper > div', `#screen-wrapper > div:nth-child(${clk})`)
        }
    }
});

//keypress handler
document.onkeypress = e => {
    if (e) {        
        let key = e.key,
            charCode = e.charCode;
        if (Number.isInteger(parseInt(key)) ) {
            activate('#screen-suji > div', `#screen-suji div:nth-child(${key})`)
            scrnActive('#screen-wrapper > div', `#screen-wrapper > div:nth-child(${key})`)
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
}




/*search*/
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
searchField.onkeyup = e => k(e);


const k = e => {
    fieldValue = e.target.value;



    //console.log(e.keyCode)
    e.keyCode == 13 ? window.location = `https://duckduckgo.com/?q=${fieldValue}` : null;
}
