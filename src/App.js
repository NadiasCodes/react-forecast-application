import React from "react";
import "./App.css";
import Weather from "./Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { BsGithub } from "react-icons/bs";
import { BsWindowFullscreen } from "react-icons/bs";



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App</h2>
        <Weather defaultCity="Cologne" />

        <footer>
          This project was coded & designed by{" "}
          <a
            href="https://www.linkedin.com/in/nadia-bouli/"
            target="blank"
            className="coder"
          >
            Nadia Bouli
            <br />
          </a>
         Hosting & GitHub <br />
          <br />{" "}
          <FontAwesomeIcon
            icon={faArrowDown}
            bounce
            style={{ color: "#B197FC" }}
          />
          <br />
          <div class="social-links d-flex justify-content-center mb-5">
            <a
              href="https://react-forecast-app.vercel.app/"
              target="_blank"
              title="Vercel"
              rel="noopener noreferrer"
            >
              <BsWindowFullscreen className="VercelIcon" />
            </a>
            <a
              href="https://github.com/NadiasCodes"
              target="_blank"
              title="GitHub Profile"
              rel="noopener noreferrer"
            >
              <BsGithub className="githubIcon" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
