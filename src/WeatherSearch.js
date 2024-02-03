import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b35c686ba9565ba0ab254c2230937552`
      )
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Weather Search Engine</h1>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {weather && (
        <div>
          <h2>City: {weather.name}</h2>
          <h3>Temperature: {weather.main.temp}°C</h3>
          <h3>Humidity: {weather.main.humidity}%</h3>
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
