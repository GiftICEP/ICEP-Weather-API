import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";

import LearningService from "./components/Services/ServiceCard";

import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <h1 class="text">Tshwane University of Technology</h1>

      {/*Add image here*/}
      <img src= {require('./ICEP.png')} alt="University" className="university-image" />

      {/*Add */}
      <p class="text">Climate change has led to an increase in the frequency and intensity of extreme weather events, posing significant
       challenges to communities, infrastructure, and ecosystems worldwide.</p>
      <hr/>

      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      
      <br/>
      <LearningService/>
      <hr/>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Mukwevho Gift. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
