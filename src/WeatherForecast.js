import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [day, setDay] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  useEffect(() => {
    const apiKey = "10b71242bt5ccb0ob65af52af58a3f2c";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=41.6&lat=67.2&key=${apiKey}`;

    axios.get(apiUrl).then((response) => {
      const dailyData = response.data.daily;
      const firstDay = dailyData[0];
      const secondDay = dailyData[1];

      setMaxTemp(firstDay.temperature.maximum);
      setMinTemp(secondDay.temperature.minimum);
      setCondition(firstDay.condition.icon_url);
      setDay(firstDay.time * 1000);
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[new Date(firstDay.time * 1000).getDay()];
      setDayOfWeek(day);
    });
  }, []);

  return (
    <div className="WeatherForecast border">
      <div>{dayOfWeek}</div>
      <div>
        <img src={condition} alt="forecast-icon" />
      </div>
      <span className="WeatherForecast-max-temp">{Math.round(maxTemp)}°</span>
      <span className="WeatherForecast-min-temp">{Math.round(minTemp)}°</span>
    </div>
  );
}
