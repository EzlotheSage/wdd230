document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR_OPENWEATHER_API_KEY';
    const city = 'Carlsbad';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

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

    function formatForecastDate(timestamp) {
        const date = new Date(timestamp * 1000);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}/${day}`;
    }

    function displayForecast(data) {
        const forecastListElement = document.getElementById('forecast-list');
        forecastListElement.innerHTML = '';

        for (let i = 0; i < data.list.length; i += 8) {
            const forecast = data.list[i];
            const date = formatForecastDate(forecast.dt);
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
