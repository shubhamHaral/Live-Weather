import axios from "axios";

const OPEN_CAGE_API_KEY = "03e12f26736c482b980a4ddc85d8ef5a"; // Replace with your OpenCage API key

// Function to fetch city coordinates using OpenCage API
async function getCityCoordinates(city) {
    const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPEN_CAGE_API_KEY}`
    );

    if (response.data.results.length === 0) {
        throw new Error("City not found");
    }

    const { lat, lng } = response.data.results[0].geometry;
    return { latitude: lat, longitude: lng };
}

// Function to map weather code to a description
function mapWeatherCodeToDescription(weatherCode) {
    switch (weatherCode) {
        case 0:
            return "Clear sky";
        case 1:
        case 2:
        case 3:
            return "Partly cloudy";
        case 45:
        case 48:
            return "Fog";
        case 51:
        case 52:
        case 53:
        case 54:
            return "Light rain";
        case 61:
        case 62:
        case 63:
            return "Heavy rain";
        case 71:
        case 72:
        case 73:
            return "Snow";
        case 95:
        case 96:
        case 99:
            return "Thunderstorm";
        default:
            return "Unknown";
    }
}

// Function to fetch weather data from Open-Meteo API
export async function fetchWeather(city) {
    const { latitude, longitude } = await getCityCoordinates(city);

    const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    if (!response.data || !response.data.current_weather) {
        throw new Error("Failed to fetch weather data");
    }

    const data = response.data.current_weather;
    return {
        city,
        description: mapWeatherCodeToDescription(data.weathercode), // Use the mapping function
        temperature: data.temperature,
        windSpeed: data.windspeed,
        humidity: data.humidity,
    };
}
