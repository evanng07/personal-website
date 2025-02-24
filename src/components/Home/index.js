import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-ev.png";
import AnimatedLetters from "../AnimatedLetters";
import Headshot from "../../assets/images/headshot.png";
import AKPSI from "../../assets/images/akpsi.png";
import HackUTD from "../../assets/images/hackutd.png";
import JPMorgan from "../../assets/images/jpmorgan-icon.png";
import EvanNgoResume from "../../assets/images/EvanNgoResumeV2.pdf";
import UTD from "../../assets/images/utd-logo.png";
import "./index.scss";
import MobileHome from "./MobileHome";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return isMobile ? (
    <MobileHome />
  ) : (
    <>
      <div className="container home-page">
        <div className="text-zone-home">
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
          <a
            className="resume-button"
            href={EvanNgoResume}
            download="EvanNgoResume.pdf"
          >
            {" "}
            DOWNLOAD RESUME{" "}
          </a>
        </div>

        <div className="logos-card">
          <div className="logos-container">
            <div className="logo logo-1">
              <img src={UTD} alt="Headshot" />
            </div>
            <div className="logo logo-2">
              <img src={AKPSI} alt="Headshot" />
            </div>
            <div className="logo logo-3">
              <img src={HackUTD} alt="Headshot" />
            </div>
            <div className="logo logo-4">
              <img src={JPMorgan} alt="Headshot" />
            </div>
          </div>

          <div className="headshot">
            <img src={Headshot} alt="Headshot" />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
