const API_KEY = 'a30f78ef6849e1b831e37eac57b22c9b',
	weatherBox = document.getElementById('weather'),
	weatherInput = document.querySelector('.settings__input.settings__input_weather'),
	temperature = document.getElementById('temperature'),
	tempIcon = document.getElementById('weather__icon'),
	storage = window.localStorage;

let getWeatherCity = storage.getItem('weatherCity');

const requestWeather = (city)  => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
		.then(res => res.json())
		.then(data => {
			const main = data.main,
				weatherName = data.weather[0];

			temperature.innerText = `${main.temp} °C`;
			//- fill tooltip text with weather description
			weatherBox.title = weatherName.description.toUpperCase();

			switch(weatherName.main){
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
			case (['Mist', 'Haze', 'Dust', 'Fog', 'Smoke', 'Mist', 'Sand', 'Tornado'].includes(weatherName.main)):
				tempIcon.textContent = 'm';
				break;
			default:
				tempIcon.textContent = 'd';
				break;
			}
		});
};

getWeatherCity ? requestWeather(getWeatherCity) : requestWeather('Cornwall');

weatherInput.addEventListener('keydown', e => {
	if (e.key == 'Enter') {
		storage.removeItem('weatherCity');
		storage.setItem('weatherCity', weatherInput.value);

		let newWeatherCity = storage.getItem('weatherCity');
		requestWeather(newWeatherCity);

		// TODO make animation that when enter is pressed and no more action needed
	} 
});

export default requestWeather;