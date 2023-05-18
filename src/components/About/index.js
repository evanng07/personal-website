import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            index={15}
          />
        </h1>
        <p>
          I am currently a sophomore at the University of Texas at Dallas
          pursuing a degree in Computer Science with a minor in Math. I am
          looking forward to any opportunities that come my way as I am eager to
          learn and improve my skills. I enjoy challenging myself to become the
          best version I can be. My main focus as an up and coming developer is
          to make a difference where I can.
        </p>
        <p>
          If I could describe myself in a sentence, it would be: I am very
          passionate about things I pursue, curious about things I don't know,
          and always willing to learn something new.
        </p>
        <p>
          Outside of academics, I love sports, spending time with friends and
          family, listening to podcasts, or watching shows. My favorite teams
          are the Dallas Cowboys, the Dallas Mavericks, Manchester United, the Texas Rangers,
          and the Dallas Stars. I am from Dallas if you could not tell. 
          My favorite podcasts are Frankly Speaking by Frank Niu, New Heights
          by Travis/Jason Kelce, and the What's Good Podcast by Simon Minter and
          Randolph.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJava} color="#DD0031" />
          </div>

          <div className="face6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#00549d"
                fill-rule="evenodd"
                d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#0086d4"
                fill-rule="evenodd"
                d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#0075c0"
                fill-rule="evenodd"
                d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M31 21H33V27H31zM38 21H40V27H38z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M29 23H35V25H29zM36 23H42V25H36z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default About;
