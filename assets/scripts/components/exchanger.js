const API_KEY = process.env.EXCHANGE_API, 
	BASE_CURRENCY = process.env.BASE_CURRENCY,
	CURRENCY_LIST = process.env.CURRENCY_LIST.split(', ');

//storage
const storage = window.localStorage;
const currentExchangeDate = storage.getItem('lastExchange'),
	currentTime = new Date().getTime().toString();

if (currentExchangeDate < currentTime.substring(0, 10)) {
	fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${BASE_CURRENCY}`)
		.then(res => res.json())
		.then(data => {
			const conversionRates = data.conversion_rates,
				lastExchangeUpdate = data.time_next_update_unix;
    
			console.log(data);
			
			Object.keys(conversionRates).map(currency => {
				CURRENCY_LIST.includes(currency) ? storage.setItem(currency, conversionRates[currency]) : null;
			});
			
			//last
			storage.setItem('lastExchange', lastExchangeUpdate);
		});
}

// Object with all saved in localStorage exchange rates 
let currentExchangeRatesObject = {};
CURRENCY_LIST.forEach(el => currentExchangeRatesObject[el] = storage.getItem(el));

// main function - work with currencies | currency code in ISO 4217
window.exchanger = (amount, exchangedCurrency, toExchanged) => {
	let currencyCode = exchangedCurrency.toUpperCase(),
		currentExchageRate = currentExchangeRatesObject[currencyCode],
		result;
		
	if (toExchanged) {
		result = amount / currentExchageRate;
		return `${result.toFixed(2)} ${BASE_CURRENCY}`;
	} else {
		result = amount * currentExchageRate;
		return `${result.toFixed(2)} ${currencyCode}`;
	}
};

// console.log(exchanger(10000, 'RUB'));
// console.log(exchanger(20, 'USD', true));