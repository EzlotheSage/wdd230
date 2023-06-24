const apiKey = 'b71b7c35ebce194fa2b43f67893af941';
  
  
  const city = 'Boise, ID';

  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.61&lon=-116.23&units=imperial&appid=bc7fb27d86655ce7753ba6f95336c886`)
    .then(response => response.json())
    .then(data => {
      const temperatureElement = document.getElementById('temperature');
      const windSpeedElement = document.getElementById('windSpeed');
      const windChillElement = document.getElementById('windChill');
      const weatherIconElement = document.getElementById('weatherIcon');
      
      // Update temperature
      temperatureElement.textContent = data.main.temp.toFixed(1);

      // Update wind speed
      windSpeedElement.textContent = data.wind.speed.toFixed(1);

      // Calculate wind chill (if applicable)
      const windChill = calculateWindChill(data.main.temp, data.wind.speed);
      windChillElement.textContent = (windChill !== null) ? windChill.toFixed(1) : 'N/A';

      // used for debugging, ignore
      //console.log(temperatureElement);
      //console.log(windSpeedElement);
      //console.log(windChillElement);

      const weatherIconCode = data.weather[0].icon;
      const weatherIconUrl = 'http://openweathermap.org/img/wn/${weatherIconCode}.png';
      weatherIconElement.src = weatherIconUrl;
      weatherIconElement.alt = data.weather[0].description;
    })



    .catch(error => {
      console.log('An error occurred while fetching weather data:', error);
    });

  // Function to calculate wind chill
  function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed >= 3) {
      const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
      return windChill;
    }
    return null; // Wind chill not applicable
  }