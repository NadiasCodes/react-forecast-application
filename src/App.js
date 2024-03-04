import React from "react";
import "./App.css";
import Weather from "./Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { BsGithub } from "react-icons/bs";
import { BsWindowFullscreen } from "react-icons/bs";
import { FaReact } from "react-icons/fa";




export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App</h2>
        <p>
          Made with <FaReact className="ReactIcon" />
        </p>
        <Weather defaultCity="Cologne" />

        
      </div>
    </div>
  );
}
