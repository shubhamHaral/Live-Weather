import React from 'react';

function WeatherCard({ weather }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl space-y-4">
      <h2 className="text-3xl font-semibold text-gray-700">{weather.city}</h2>
      <p className="text-xl text-gray-500">{weather.description}</p>
      <p className="text-5xl font-bold text-blue-600">{weather.temperature}°C</p>
      <div className="flex justify-between text-gray-600">
        <p>Wind: {weather.windSpeed} m/s</p>
        <p>Humidity: {weather.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherCard;
