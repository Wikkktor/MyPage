import React from "react";
import Button from "@mui/material/Button";
import { Coalesce } from "ambient-cbg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero">
      <Coalesce />
      <img
        className="img-fluid"
        alt="Wiktor Karaszewicz"
        src={"/wiktor.jpeg"}
      />
      <h1>Wiktor Karaszewicz</h1>
      <h2>FullStack Developer</h2>
      <div
        id="buttons"
        className="mt-3 d-flex flex-row aling-items-center justify-content-between"
      >
        <a target="_blank" href="https://github.com/wikkktor">
          <Button variant="outlined">
            Github
            <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/wiktor-karaszewicz/"
        >
          <Button variant="contained">
            LinkedIn <FaLinkedin />
          </Button>
        </a>
      </div>
      <a href="#Navigation">
        <Button variant="outlined" className="soloButton">
          More about me
        </Button>
      </a>
    </div>
  );
};

export default Hero;
