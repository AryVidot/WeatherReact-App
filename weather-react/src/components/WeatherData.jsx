import React from "react";

const WeatherData = (props) => {
  // object destructuriong in
  // const WeatherData = ({ weather }) => {
  // const { temp } = weather;

  return (
    <div className="weather-data__box">
      <div className="weather-data__value">
        {Math.round(props.weather.temp)}°C
      </div>
      <div className="weather-data__icon">
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="weather-data__main">{props.description}</div>
    </div>
  );
};

export default WeatherData;
