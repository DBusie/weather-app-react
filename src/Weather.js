import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      city: response.data.city,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-sm-8">
              <input
                type="search"
                placeholder="Enter city..."
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              <input type="submit" value="Search" className="btn btn-warning" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row m-3">
          <div className="col-sm-6 weather-description">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="img-fluid weather-icon"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>{" "}
          </div>
          <div className="col-sm-6">
            <ul>
              <li>
                Humidity:
                {weatherData.humidity}%
              </li>
              <li>
                Wind:
                {weatherData.wind} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "10b71242bt5ccb0ob65af52af58a3f2c";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
