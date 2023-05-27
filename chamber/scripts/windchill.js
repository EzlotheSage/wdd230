// windchill.js

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Display current (sorta) temp and wind speed
    document.getElementById("temperature").textContent = temperature.toFixed(1);
    document.getElementById("windSpeed").textContent = windSpeed;
    // Check if the temperature and wind speed meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
      // Calculate the wind chill factor using the formula
      var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  
      // Display the wind chill factor value
      console.log("Wind Chill Factor: " + windChill.toFixed(2) + "°F");
  
      // Update the page with the wind chill factor information
      
      document.getElementById("windChill").textContent = windChill.toFixed(2) + "°F";
    } else {
      // Display "N/A" if the input values do not meet the requirements
      console.log("N/A");
  
      // Update the page with the "N/A" message
      document.getElementById("windChill").textContent = "N/A";
    }
  }
  
  // Pre-defined temperature and wind speed values, sorta like May weather
  var temperature = 70; 
  var windSpeed = 5.0; 
  
  // Call the function to calculate and display the wind chill factor
  calculateWindChill(temperature, windSpeed);
  