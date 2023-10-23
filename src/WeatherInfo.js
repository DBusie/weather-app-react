import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row m-3">
        <div className="col-sm-6 weather-description">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="img-fluid weather-icon"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>{" "}
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              Humidity:
              {props.data.humidity}%
            </li>
            <li>Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
