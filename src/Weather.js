import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Tuesday 08:05",
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
          <li>{weatherData.date}</li>
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
                Precipitation<span></span>
              </li>
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
    let city = "lisbon";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
