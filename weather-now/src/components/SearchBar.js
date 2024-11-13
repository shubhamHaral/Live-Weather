import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className="w-full p-3 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 transition duration-200"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;
