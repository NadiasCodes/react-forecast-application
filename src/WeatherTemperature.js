import React, { useState } from "react";
import "./WeatherInfo.css";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheitTemp() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="temp-container">
        <div className="temperature">
          {Math.round(props.celsius)}
          <span className="unit">
            °C|
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        {Math.round(fahrenheitTemp())}
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C|
          </a>
          °F
        </span>
      </div>
    );
  }
}
