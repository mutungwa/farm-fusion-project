// Replace YOUR_API_KEY with your OpenWeatherMap API key
const apiKey = "a4863a5a050af68008f3168455e30f8f";
const city = "Nairobi"; // Replace London with the city you want to display weather for

// API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Get weather data from OpenWeatherMap API
fetch(apiUrl)
	.then(response => {
		return response.json();
	})
	.then(data => {
		// Display weather data on the page
		const weatherDiv = document.getElementById("weather");
		const temperature = data.main.temp;
		const description = data.weather[0].description;
		const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
		weatherDiv.innerHTML = `
			<img src="${iconUrl}" alt="${description}">
			<p>${description}</p>
			<p>Temperature: ${temperature} &deg;C</p>
		`;
	})
	.catch(error => {
		console.log(error);
	});
