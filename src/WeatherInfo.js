import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

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
      <Row className="justify-content-center">
        <Col className="weather-description">
          <div className="row mt-3">
            <div className="col-sm-2">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="img-fluid weather-icon"
              />
            </div>
            <div className="col-sm-2">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </Col>
        <Col>
          <ul>
            <li>
              Humidity:
              {props.data.humidity}%
            </li>
            <li>Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
