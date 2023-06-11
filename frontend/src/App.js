import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/weather');
        setWeatherData(result.data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {weatherData && (
        <div>
          <h1>{weatherData.Headline.Text}</h1>
          <p>Minimum temperature: {weatherData.DailyForecasts[0].Temperature.Minimum.Value}</p>
          <p>Maximum temperature: {weatherData.DailyForecasts[0].Temperature.Maximum.Value}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;
