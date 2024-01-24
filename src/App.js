import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nadia-bouli/"
            target="blank
        "
          >
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
            href="https://weather-app-made-with-react.vercel.app/"
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
