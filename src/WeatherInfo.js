import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="header-background"></div>
      <div className="header"></div>
      <div className="header-text">
        <h1>{props.data.city}</h1>
        <div className="date">
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size="58px" />
            <span className="description">{props.data.description}</span>{" "}
          </div>
          <div className="Details">
            <ReactAnimatedWeather
              icon="FOG"
              color="white"
              size={40}
              animate={true}
            />{" "}
            <span className="humidity-text">Humidity:</span>
            <span className="humidity">{props.data.humidity}%</span>{" "}
            <ReactAnimatedWeather
              icon="WIND"
              color="white"
              size={40}
              animate={true}
            />{" "}
            
            <span className="wind">{Math.round(props.data.wind)}km/h</span>
          </div>
        </div>
        <div className="col-4">
          <div className="background">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}