import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App</h2>
        <Weather defaultCity="Cologne" />
        <footer>
          This project was coded & designed by{" "}
          <a href="https://www.linkedin.com/in/nadia-bouli/" target="blank" className="coder">
            Nadia Bouli
          </a>{" "}
          with{" "}
          <a href="https://create-react-app.dev/" target="blank">
            React
          </a>
          , is opened sourced on
          <a
            href="https://github.com/NadiasCodes/react-weather-application"
            target="blank
        "
          >
            GitHub
          </a>{" "}
          & hosted on{" "}
          <a
            href="https://react-forecast-app.vercel.app/"
            target="blank
        "
          >
            Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
