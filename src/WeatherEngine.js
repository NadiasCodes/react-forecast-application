import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function WeatherEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [icon, setIcon] = useState(null);

  function fetchData(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "58a6775f97527351bf6c6966e209be39";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(fetchData);
  }

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (temperature !== null) {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleChange}
            placeholder="Enter a city..."
            className="form"
          />
          <input type="submit" value="Search" className="button" />
        </form>
        <ul>
          <div className="lists">
            <li>Temperature: {temperature}°C</li>
            <li>Description: {description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind} km/h</li>
            <li>
              <img
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt="weatherIcon"
              />
            </li>
          </div>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleChange}
            placeholder="Enter a city..."
          />
          <input type="submit" value="Search" />
        </form>
        <p>
          <a
            href="https://github.com/NadiasCodes/react-forecast-application"
            target="blank"
          >
            Open Sourced,{" "}
          </a>
          and deployed on{" "}
          <a
            href="https://react-forecast-application.vercel.app/"
            target="blank"
          >
            {" "}
            Vercel
          </a>
        </p>{" "}
      </div>
    );
  }
}
