import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-ev.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/home">
      <img src={LogoS} alt="logo" />
      evanngo
    </Link>
    <nav>
      <div className="icon">
        <NavLink exact="true" activeclassname="active" to="/home">
          <FontAwesomeIcon icon={faHome} size="lg" color="#4d4d4e" />
        </NavLink>
      </div>
      <div className="icon">
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon size="lg" icon={faUser} color="#4d4d4e" />
        </NavLink>
      </div>

      <div className="icon">
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon size="lg" icon={faFolder} color="#4d4d4e" />
        </NavLink>
      </div>

      <div className="icon">
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon size="lg" icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </div>
    </nav>

    <ul>
      <li>
        {/* eslint-disable-next-line */}
        <a
          target="_blank"
          rel="noreffer"
          href="https://www.linkedin.com/in/evan-ngo/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        {/* eslint-disable-next-line */}
        <a target="_blank" rel="noreffer" href="https://github.com/evanng07">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        {/* eslint-disable-next-line */}
        <a target="_blank" rel="noreffer" href="https://twitter.com/EvanNg07">
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
      <li>
        {/* eslint-disable-next-line */}
        <a
          target="_blank"
          rel="noreffer"
          href="https://www.instagram.com/evango07/"
        >
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
