const API_KEY = process.env.WEATHER_API,
	weatherBox = document.getElementById('weather'),
	weatherInput = document.querySelector('.settings__input.settings__input_weather'),
	tempToolbar = document.getElementById('temperature'),
	tempIcon = document.getElementById('weather__icon'),
	currentCityTitle = document.querySelector('.settings__current-city'),
	storage = window.localStorage;

// storage
let WeatherCity = storage.getItem('weatherCity'),
	currentTemp = storage.getItem('weatherTemp'),
	titleTemp = storage.getItem('weatherTitle'),
	weatherDesc = storage.getItem('weatherDesc'),
	timestamp = storage.getItem('timestamp');

// handles data to be shown on a screen
const weatherHandler = (temperature, name, description) => {
	tempToolbar.innerText = `${temperature} °C`;
	//- fill tooltip text with weather description
	weatherBox.title = description.toUpperCase();

	switch(name) {
	case 'Clouds': 
		tempIcon.textContent = 'c';
		break;
	case 'Clear':
		tempIcon.textContent = 'd';
		break;
	case 'Rain':
		tempIcon.textContent = 'r';
		break;
	case 'Snow':
		tempIcon.textContent = 's';
		break;
	case 'Thunderstorm':
		tempIcon.textContent = 't';
		break;
	case (['Mist', 'Haze', 'Dust', 'Fog', 'Smoke', 'Mist', 'Sand', 'Tornado'].includes(name)):
		tempIcon.textContent = 'm';
		break;
	default:
		tempIcon.textContent = 'd';
		break;
	}
};

// API call & Saving data into storage
const requestWeather = city => {	
	if (WeatherCity == city) {
		if (timestamp <= new Date().getHours()) {
			weatherHandler(currentTemp, titleTemp, weatherDesc);
		}
	} else {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
			.then(res => res.json())
			.then(data => {
				const main = data.main;
				console.log('WEATHER API CALL');
				// storage
				let weatherTemp = main.temp, 
					weatherTitle = data.weather[0].main,
					weatherDesc = data.weather[0].description,
					timestamp = new Date().getHours();
				
				storage.setItem('weatherCity', city);
				storage.setItem('weatherTemp', weatherTemp);
				storage.setItem('weatherTitle', weatherTitle);
				storage.setItem('weatherDesc', weatherDesc);
				storage.setItem('timestamp', timestamp);
					
				weatherHandler(weatherTemp, weatherTitle, weatherDesc);
			});
	}

};

WeatherCity ? requestWeather(WeatherCity) : requestWeather('Cornwall');

weatherInput.addEventListener('keydown', e => {
	if (e.key == 'Enter') {
		storage.setItem('weatherCity', weatherInput.value);

		let newWeatherCity = storage.getItem('weatherCity');
		requestWeather(newWeatherCity);
		//update city in settings
		currentCityTitle.textContent = newWeatherCity;

		// TODO make animation that when enter is pressed and no more action needed
	} 
});

export default requestWeather;