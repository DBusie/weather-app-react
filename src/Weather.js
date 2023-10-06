import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Beitbridge</h1>
      <ul>
        <li>Wednesday 08:05</li>
        <li>Mostly sunny</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <img
            src="https://th.bing.com/th/id/OIP.dUbvAZhroLoaA-UD3_l79gHaHa?pid=ImgDet&rs=1"
            alt="Mostly sunny"
            className="img-fluid"
          />
          28°C
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Precipitation</li>
            <li>humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
