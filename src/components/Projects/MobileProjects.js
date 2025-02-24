import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import "./MobileProjects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProperIcon from "../../assets/images/prop-er.jpeg";
import ITMIcon1 from "../../assets/images/ITM1.png";
import ITMIcon2 from "../../assets/images/ITM2.png";
import ITMIcon3 from "../../assets/images/ITM3.png";
import PersonalLibraryIcon from "../../assets/images/PersonalLibrary.png";
import YourPlacesIcon from "../../assets/images/YourPlaces.png";
import HowdyFFIcon from "../../assets/images/howdyff.png";
import CanCareIcon from "../../assets/images/CanCareIcon.png";

const MobileProjects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      image: ProperIcon,
      name: "Prop-er",
      date: "March 2024 - Present",
      tech: "React, Python, Flask, NBA API, TailwindCSS"
    },
    {
      image: [ITMIcon1, ITMIcon2, ITMIcon3],
      name: "In-the-Moment",
      date: "Feb 2023 - May 2023",
      tech: "React Native, MongoDB Realm, Figma",
      isMultiImage: true
    },
    {
      image: CanCareIcon,
      name: "CanCare - Code For Good Project",
      date: "October 14, 2023",
      tech: "Vite, React, MongoDB Atlas, Express, Node"
    },
    {
      image: PersonalLibraryIcon,
      name: "GreatBooks",
      date: "June 2022 - December 2022",
      tech: "React, Firebase, Google Books API"
    },
    {
      image: YourPlacesIcon,
      name: "YourPlaces",
      date: "December 2022 - February 2023",
      tech: "MongoDB, ExpressJS, ReactJS, NodeJS"
    },
    {
      image: HowdyFFIcon,
      name: "Fantasy Football League Stats",
      date: "August 2023",
      tech: "Jupyter Notebook, Python, Google Sheets"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="mobile-projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
            index={15}
          />
        </h1>
      </div>
      
      <div className="project-card">
        {projects[currentProject].isMultiImage ? (
          <div className="multi-image-container">
            {projects[currentProject].image.map((img, index) => (
              <img key={index} src={img} alt={`${projects[currentProject].name} ${index + 1}`} />
            ))}
          </div>
        ) : (
          <img 
            src={projects[currentProject].image} 
            alt={projects[currentProject].name} 
            className="project-image"
          />
        )}
        <h2>{projects[currentProject].name}</h2>
        <p className="date">{projects[currentProject].date}</p>
        <p className="tech">Technologies: {projects[currentProject].tech}</p>
      </div>

      <div className="navigation">
        <button onClick={prevProject} className="nav-button">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="project-counter">
          {currentProject + 1} / {projects.length}
        </div>
        <button onClick={nextProject} className="nav-button">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      
      <Loader type="pacman" />
    </div>
  );
};

export default MobileProjects; 