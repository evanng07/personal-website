import React, { useRef, useState, useEffect } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-ev.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faFolder,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const MobileNavigation = () => (
    <nav className="mobile-navbar">
      
      
      <NavLink exact="true" to="/about" className="about-link icon">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      
      <NavLink exact="true" to="/projects" className="projects-link icon">
        <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" to="/home" className="home-link icon">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      
      <NavLink exact="true" to="/experiences" className="experiences-link icon">
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
      </NavLink>
      
      <NavLink exact="true" to="/contact" className="contact-link icon">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
  );

  const DesktopNavigation = () => (
    <>
      <Link className="logo" to="/home">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" to="/home">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        
        <NavLink exact="true" to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        
        <NavLink exact="true" to="/projects" className="projects-link">
          <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>
        
        <NavLink exact="true" to="/experiences" className="experiences-link">
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        
        <NavLink exact="true" to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/evan-ngo/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/evanng07">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/EvanNg07">
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/evango07/">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </>
  );

  return (
    <div ref={sidebarRef} className={`nav-bar ${isSidebarOpen ? 'active' : ''}`}>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </div>
  );
};

export default Sidebar;
