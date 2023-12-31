import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C l{" "}
          <a href="/" onClick={showFahrenheit} className="unit-link">
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;

    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius} className="unit-link">
            °C
          </a>{" "}
          l °F
        </span>
      </div>
    );
  }
}
