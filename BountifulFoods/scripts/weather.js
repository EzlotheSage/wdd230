document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'bc7fb27d86655ce7753ba6f95336c886';
    const city = 'Carlsbad';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    function fetchData(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayCurrentWeather(data) {
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');
        const humidityElement = document.getElementById('humidity');

        temperatureElement.textContent = data.main.temp;
        descriptionElement.textContent = data.weather[0].description;
        humidityElement.textContent = data.main.humidity;
    }

    function displayForecast(data) {
        const forecastListElement = document.getElementById('forecast-list');
        forecastListElement.innerHTML = '';

        for (let i = 0; i < data.list.length; i += 8) {
            const forecast = data.list[i];
            const date = new Date(forecast.dt * 1000).toLocaleDateString();
            const temperature = forecast.main.temp;
            const description = forecast.weather[0].description;

            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${date}:</strong> ${description}, ${temperature} &#8451;`;
            forecastListElement.appendChild(listItem);
        }
    }

    fetchData(apiUrl)
        .then(data => displayCurrentWeather(data))
        .catch(error => console.error('Error fetching current weather:', error));

    fetchData(forecastUrl)
        .then(data => displayForecast(data))
        .catch(error => console.error('Error fetching forecast:', error));
});
