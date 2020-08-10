import React, { useState } from "react";
import axios from "axios";

import WeatherSearch from "./WeatherSearch";
import Content from "./Content";
import Location from "./Location";
import WeatherData from "./WeatherData";
// import Error from "./Error";

const Main = () => {
  const [weather, setWeather] = useState();
  //   const weather = useState[0]
  //   const setWeather = useState[1]
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;

    const API_KEY = "b3eeac9873199e3b6c23996e0eb4ab5e";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

    const request = axios.get(url);

    const response = await request;

    setWeather(response.data.main);
    setCity(response.data.name);
    setCountry(response.data.sys.country);
    setIcon(response.data.weather[0].icon);
    setDescription(response.data.weather[0].main);
  };

  weather && console.log(weather);

  return (
    <div>
      <WeatherSearch api_call={api_call} />
      <Content>
        {weather && <Location city={city} country={country} />}
        {weather && (
          <WeatherData
            weather={weather}
            description={description}
            icon={icon}
          />
        )}
      </Content>
    </div>
  );
};

export default Main;
