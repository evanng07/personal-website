import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {
  faReact,
  faJsSquare,
  faJava,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import MiniCard from "./MiniCard";
import JavaIcon from "../../../src/assets/images/java.png";
import JavaScriptIcon from "../../../src/assets/images/JavaScript-logo.png";
import GoLangIcon from "../../../src/assets/images/Go-Logo_Blue.png";
import HtmlIcon from "../../../src/assets/images/html.png";
import NodeIcon from "../../../src/assets/images/nodejs.png";
import AngularIcon from "../../../src/assets/images/angular.png";
import FlaskIcon from "../../../src/assets/images/flask.png";
import PandasIcon from "../../../src/assets/images/pandas.png";
import MongodbIcon from "../../../src/assets/images/mongodb.png";
import NumpyIcon from "../../../src/assets/images/numpy.png";
import TailwindIcon from "../../../src/assets/images/tailwind.png";
import PostmanIcon from "../../../src/assets/images/postman.png";
import FirebaseIcon from "../../../src/assets/images/firebase.png";
import AwsIcon from "../../../src/assets/images/aws.png";
import FigmaIcon from "../../../src/assets/images/figma.png";
import MobileAbout from './MobileAbout';


const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return isMobile ? <MobileAbout /> : (
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
            I am currently a Senior at the University of Texas at Dallas
            pursuing a degree in Computer Science. I am
            looking forward to any opportunities that come my way as I am eager
            to learn and improve my skills. I enjoy challenging myself to become
            the best version I can be. My main focus as an up and coming
            developer is to make a difference where I can.
          </p>
          <p>
            On campus, I am involved in a Business Fraternity called Alpha Kappa Psi, where 
            we focus on professional development and mentorship. I am also apart of HackUTD,
            where I am an experience officer, focusing on the hacker experience at the hackathon. 
            We had over 1200+ hackers during the 2023 iteration and are always looking to grow!
            
          </p>
          <p>
            Outside of academics, I love sports, spending time with friends and
            family, listening to podcasts, or watching shows. My favorite teams
            are the Dallas Cowboys, the Dallas Mavericks, Manchester United, the
            Texas Rangers, and the Dallas Stars. I am from Dallas, if you could
            not tell. If you want to know anything else about me, please feel free
            to reach out on any of my social medias or through the contact page.
          </p>
          <br></br>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                "M",
                "y",
                " ",
                "T",
                "e",
                "c",
                "h",
                "n",
                "o",
                "l",
                "o",
                "g",
                "y",
                " ",
                "S",
                "t",
                "a",
                "c",
                "k",
              ]}
              index={15}
            />
          </h2>
          <div className="tech-stack">
            <div className="top-row">
              <MiniCard>
                <svg
                  width="80px"
                  height="80px"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="img-icon-python"
                >
                  <path
                    d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                    fill="url(#a)"
                  />
                  <path
                    d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z"
                    fill="url(#b)"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="19.075"
                      y1="18.782"
                      x2="34.898"
                      y2="34.658"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#387EB8" />
                      <stop offset="1" stop-color="#366994" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="28.809"
                      y1="28.882"
                      x2="45.803"
                      y2="45.163"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFE052" />
                      <stop offset="1" stop-color="#FFC331" />
                    </linearGradient>
                  </defs>
                </svg>
              </MiniCard>
              <MiniCard className="img-icon">
                <img
                  src={JavaIcon}
                  width="40px"
                  height="45px"
                  className="img-icon-java"
                  alt="java icon"
                />
              </MiniCard>
              <MiniCard>
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 256 288"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                  className="img-icon-c"
                >
                  <path
                    d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                    fill="#5C8DBC"
                  />
                  <path
                    d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074"
                    fill="#1A4674"
                  />
                  <path
                    d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352"
                    fill="#1A4674"
                  />
                  <path
                    d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                    fill="#1B598E"
                  />
                  <path
                    d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721"
                    fill="#FFF"
                  />
                  <path
                    d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371"
                    fill="#FFF"
                  />
                </svg>
              </MiniCard>
              <MiniCard>
                <img
                  src={JavaScriptIcon}
                  className="img-icon-js"
                  alt="javascript icon"
                />
              </MiniCard>
              <MiniCard>
                <img src={HtmlIcon} className="img-icon-html" alt="html icon" />
              </MiniCard>
              <MiniCard>
                <img
                  src={GoLangIcon}
                  className="img-icon-go"
                  alt="golang icon"
                />
              </MiniCard>
            </div>
            <div className="mid-row">
              <MiniCard>
                <FontAwesomeIcon
                  icon={faReact}
                  color="#5ED4F4"
                  className="img-icon-react"
                />
              </MiniCard>
              <MiniCard>
                <img
                  src={NodeIcon}
                  className="img-icon-html"
                  alt="node js icon"
                />
              </MiniCard>
              <MiniCard>
              <img
                  src={AngularIcon}
                  className="img-icon-html"
                  alt="Angular icon"
                />
              </MiniCard>
              <MiniCard>
              <img
                  src={FlaskIcon}
                  className="img-icon-html"
                  alt="Flaskicon"
                />
              </MiniCard>
              <MiniCard>
              <img
                  src={PandasIcon}
                  className="img-icon-pandas"
                  alt="Pandas icon"
                />
              </MiniCard>
            </div>
            <div className="bot-row">
              <MiniCard>
              <img
                  src={TailwindIcon}
                  className="img-icon-html"
                  alt="Flaskicon"
                />
              </MiniCard>
              <MiniCard>
              <img
                  src={NumpyIcon}
                  className="img-icon-numpy"
                  alt="Flaskicon"
                />
              </MiniCard>
              <MiniCard>
              <img
                  src={MongodbIcon}
                  className="img-icon-mongodb"
                  alt="Flaskicon"
                />
              </MiniCard>
              <MiniCard>
              <img
                  src={AwsIcon}
                  className="img-icon-aws"
                  alt="Flaskicon"
                />
              </MiniCard>
              <MiniCard>
              <img
                  src={PostmanIcon}
                  className="img-icon-postman"
                  alt="Flaskicon"
                />
              </MiniCard>
              <MiniCard>
              <img
                  src={FigmaIcon}
                  className="img-icon-figma"
                  alt="Flaskicon"
                />
              </MiniCard>
            </div>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <svg
                width="100"
                height="100"
                viewBox="0 0 256 288"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                  fill="#5C8DBC"
                />
                <path
                  d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074"
                  fill="#1A4674"
                />
                <path
                  d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352"
                  fill="#1A4674"
                />
                <path
                  d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                  fill="#1B598E"
                />
                <path
                  d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721"
                  fill="#FFF"
                />
                <path
                  d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371"
                  fill="#FFF"
                />
              </svg>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#28A4D9" />
            </div>
            <div className="face4">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                  fill="url(#a)"
                />
                <path
                  d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z"
                  fill="url(#b)"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1="19.075"
                    y1="18.782"
                    x2="34.898"
                    y2="34.658"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#387EB8" />
                    <stop offset="1" stop-color="#366994" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="28.809"
                    y1="28.882"
                    x2="45.803"
                    y2="45.163"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFE052" />
                    <stop offset="1" stop-color="#FFC331" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
