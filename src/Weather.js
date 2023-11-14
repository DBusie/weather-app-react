import React, { useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";
import WeatherForecastDay from "./WeatherForecastDay";

import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      lat: response.data.coordinates.latitude,
      lon: response.data.coordinates.longitude,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      city: response.data.city,
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    const apiKey = "10b71242bt5ccb0ob65af52af58a3f2c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-8">
              <input
                type="search"
                placeholder="Enter city..."
                className="form-control shadow"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-sm-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-info btn-lg shadow"
              />
            </div>
          </div>
        </form>
        <div>
          {" "}
          <WeatherInfo data={weatherData} />
        </div>

        <div className="row">
          <div className="col">
            <WeatherForecastDay lat={weatherData.lat} lon={weatherData.lon} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["var(--col-1)", "var(--col-4)", "var(--col-3)"]}
        backgroundColor="var(--col-2)"
      />
    );
  }
}
