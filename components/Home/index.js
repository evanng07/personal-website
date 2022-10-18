import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-ev.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["v", "a", "n", " ", "N", "g", "o", ","];
  const jobArray = [
    "w",
    "e",
    "l",
    "c",
    "o",
    "m",
    "e",
    " ",
    "t",
    "o",
    " ",
    "m",
    "y",
    " ",
    "p",
    "o",
    "r",
    "t",
    "f",
    "o",
    "l",
    "i",
    "o",
    "!",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000);
    return () => clearTimeout(timer);
  }, []) 

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={15}
          />
        </h1>
        <h2>Aspiring Software Engineer | Student</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default Home;
