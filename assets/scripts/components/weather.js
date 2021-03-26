const API_KEY = 'a30f78ef6849e1b831e37eac57b22c9b',
	temperature = document.getElementById('temperature'),
	tempIcon = document.getElementById('weather__icon');


const requestWeather = (city)  => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
		.then(res => res.json())
		.then(data => {
			const main = data.main,
				weatherName = data.weather[0];
                

			temperature.innerText = `${main.temp} °C`;
			// console.log(data);
			console.log(weatherName.description.toUpperCase());

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

export default requestWeather;