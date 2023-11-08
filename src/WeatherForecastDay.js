import React, { useState } from "react";

import axios from "axios";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecastDay">
        <div className="row">
          <div className="col">
            <div className="forecastDay">
                           {forecast[0].(new Date(time * 1000))}
            </div>
            <div className="forecastIcon">{forecast[0].condtion.icon_url}</div>
            <div className="forecastTemperature">
              <span className="maxTemperature">
                {forecast[0].temperature.maximum}°
              </span>
              {''}
              <span className="minTemperature">
                {forecast[0].temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "10b71242bt5ccb0ob65af52af58a3f2c";
    const latitude = "props.lat";
    const longitude = "props.lon";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
    return null;
  }
}
