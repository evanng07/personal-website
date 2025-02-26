import React from "react";
import "./MobileAbout.scss";
import MiniCard from "./MiniCard";
import JavaIcon from "../../assets/images/java.png";
import JavaScriptIcon from "../../assets/images/JavaScript-logo.png";
import GoLangIcon from "../../assets/images/Go-Logo_Blue.png";
import HtmlIcon from "../../assets/images/html.png";
import NodeIcon from "../../assets/images/nodejs.png";
import AngularIcon from "../../assets/images/angular.png";
import FlaskIcon from "../../assets/images/flask.png";
import PandasIcon from "../../assets/images/pandas.png";
import MongodbIcon from "../../assets/images/mongodb.png";
import NumpyIcon from "../../assets/images/numpy.png";
import TailwindIcon from "../../assets/images/tailwind.png";
import PostmanIcon from "../../assets/images/postman.png";
import FirebaseIcon from "../../assets/images/firebase.png";
import AwsIcon from "../../assets/images/aws.png";
import FigmaIcon from "../../assets/images/figma.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact,
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";

const MobileAbout = () => {
  return (
    <div className="mobile-about-container">
      <div className="content-section">
        <h1>About Me</h1>
        <div className="text-section">
          <p>
            I am currently a Senior at the University of Texas at Dallas
            pursuing a degree in Computer Science. I am looking forward to any
            opportunities that come my way as I am eager to learn and improve my
            skills.
          </p>
          <p>
            On campus, I am involved in a Business Fraternity called Alpha Kappa
            Psi, where we focus on professional development and mentorship. I am
            also apart of HackUTD, where I am an experience officer, focusing on
            the hacker experience at the hackathon. We had over 1200+ hackers
            during the 2023 iteration and are always looking to grow!
          </p>
          <p>
            Outside of academics, I love sports, spending time with friends and
            family, listening to podcasts, or watching shows. My favorite teams
            are the Dallas Cowboys, the Dallas Mavericks, Manchester United, the
            Texas Rangers, and the Dallas Stars.
          </p>
        </div>

        <h2>Technology Stack</h2>
        <div className="tech-stack">
          <div className="stack-row">
            <MiniCard>
              <FontAwesomeIcon
                icon={faReact}
                color="#5ED4F4"
                className="img-icon-react"
              />
            </MiniCard>
            <MiniCard>
              <img src={JavaIcon} alt="Java" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img
                src={JavaScriptIcon}
                alt="JavaScript"
                className="tech-icon"
              />
            </MiniCard>

            <MiniCard>
              <img src={HtmlIcon} alt="HTML" className="tech-icon" />
            </MiniCard>
          </div>
          <div className="stack-row">
            <MiniCard>
              <img src={NodeIcon} alt="Node.js" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img src={AngularIcon} alt="Angular" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img src={FlaskIcon} alt="Flask" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img src={PandasIcon} alt="Pandas" className="tech-icon" />
            </MiniCard>
          </div>
          <div className="stack-row">
            <MiniCard>
              <img src={MongodbIcon} alt="MongoDB" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img src={NumpyIcon} alt="NumPy" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img src={TailwindIcon} alt="Tailwind" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img src={PostmanIcon} alt="Postman" className="tech-icon" />
            </MiniCard>
          </div>
          <div className="stack-row">
            <MiniCard>
              <img src={AwsIcon} alt="AWS" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img src={FigmaIcon} alt="Figma" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img src={FirebaseIcon} alt="Firebase" className="tech-icon" />
            </MiniCard>
            <MiniCard>
              <img src={GoLangIcon} alt="Go" className="tech-icon" />
            </MiniCard>
          </div>
        </div>

        <h2>Connect With Me</h2>
        <div className="social-links">
          <a 
            href="https://github.com/evanng07" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a>
          <a 
            href="https://twitter.com/EvanNg07" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" />
          </a>
          <a 
            href="https://www.linkedin.com/in/evan-ngo/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
          </a>
          <a 
            href="https://www.instagram.com/evango07/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="#E4405F" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;
