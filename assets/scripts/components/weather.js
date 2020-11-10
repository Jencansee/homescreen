const API_KEY = 'a30f78ef6849e1b831e37eac57b22c9b',
	temperature = document.getElementById('temperature'),
	tempIcon = document.getElementById('weather__icon').attributes.src;    


const requestWeather = (city)  => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
		.then(res => res.json())
		.then(data => {
			const main = data.main,
				weatherName = data.weather[0];
                

			temperature.innerText = `${main.temp} °C`;
			console.log(data);
			console.log(weatherName.description.toUpperCase());

			switch(weatherName.main){
			case 'Clouds': 
				tempIcon.textContent = 'assets/imgs/weather/clouds.svg';
				break;
			case 'Clear':
				tempIcon.textContent = 'assets/imgs/weather/sunny.svg';
				break;
			case 'Rain':
				tempIcon.textContent = 'assets/imgs/weather/rain.svg';
				break;
			case 'Snow':
				tempIcon.textContent = 'assets/imgs/weather/snow.svg';
				break;
			case 'Thunderstorm':
				tempIcon.textContent = 'assets/imgs/weather/thunderstorm.svg';
				break;
			case (['Mist', 'Haze', 'Dust', 'Fog', 'Smoke', 'Mist', 'Sand', 'Tornado'].includes(weatherName.main)):
				tempIcon.textContent = 'assets/imgs/weather/mist.svg';
				break;
			default:
				tempIcon.textContent = 'assets/imgs/weather/sunny.svg';
				break;
			}

		});
};

export default requestWeather;