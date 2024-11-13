import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './services/weatherService';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-bold mb-6 drop-shadow-lg">Weather Now</h1>
      <div className="bg-white p-8 rounded-lg shadow-xl w-80 max-w-xl">
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500 text-center">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
