// Select necessary DOM elements
const userInput = document.querySelector('.input-box');
const searchButton = document.getElementById('searchBtn');
const weatherImage = document.querySelector('.weather-img');
const temperatureDisplay = document.querySelector('.temperature');
const descriptionDisplay = document.querySelector('.description');
const humidityDisplay = document.getElementById('humidity');
const windSpeedDisplay = document.getElementById('wind-speed');
const weatherBody = document.querySelector('.weather-body');
const locationNotFound = document.querySelector('.location-not-found');

// Function to fetch and display weather information
const fetchWeatherData = async (city) => {
    const apiKey = '15419c3515057c3a130b4d3084a0006b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Hide previous error message and show loading state
    locationNotFound.style.display = 'none';
    weatherBody.style.display = 'block';
    weatherImage.src = "assets/loading.svg";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response contains weather data
        if (data.cod === 200) {
            const weatherDescription = data.weather[0].description;
            const temperatureInKelvin = data.main.temp;
            const humidityLevel = data.main.humidity;
            const windSpeedValue = data.wind.speed;

            // Update weather information on the page
            descriptionDisplay.innerHTML = weatherDescription;
            temperatureDisplay.innerHTML = `${Math.round(temperatureInKelvin - 273.15)} <sup>°C</sup>`;
            humidityDisplay.innerHTML = `${humidityLevel}%`;
            windSpeedDisplay.innerHTML = `${windSpeedValue} Km/H`;

            // Update weather image based on description
            switch (weatherDescription) {
                case 'clear sky':
                    weatherImage.src = "assets/clear.png";
                    break;
                case 'overcast clouds':
                case 'scattered clouds':
                    weatherImage.src = "assets/cloudPic.png";
                    break;
                case 'few clouds':
                    weatherImage.src = "assets/snow.png";
                    break;
                case 'light rain':
                case 'moderate rain':
                    weatherImage.src = "assets/rain.png";
                    break;
                case 'broken clouds':
                    weatherImage.src = "assets/mist.png";
                    break;
                case 'haze':
                case 'light intensity drizzle rain':
                    weatherImage.src = "assets/haze.png";
                    break;
                default:
                    weatherImage.src = "assets/clear.png";
            }
        } else {
            // Display error message if location is not found
            weatherBody.style.display = 'none';
            locationNotFound.style.display = 'block';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherBody.style.display = 'none';
        locationNotFound.style.display = 'block';
    }
};

// Event listener for the search button
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchWeatherData(userInput.value.trim());
});