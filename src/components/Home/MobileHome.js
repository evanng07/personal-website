import React from 'react';
import { Link } from 'react-router-dom';
import Headshot from '../../assets/images/headshot.png';
import AKPSI from '../../assets/images/akpsi.png';
import HackUTD from '../../assets/images/hackutd.png';
import JPMorgan from '../../assets/images/jpmorgan-icon.png';
import EvanNgoResume from '../../assets/images/EvanNgoResume.pdf';
import './MobileHome.scss';

const MobileHome = () => {
  return (
    <div className="mobile-home-page">
      <div className="headshot-container">
        <img src={Headshot} alt="Headshot" className="headshot" />
      </div>
      
      <div className="text-zone">
        <h1>Welcome to my Portfolio, <br></br> I'm Evan Ngo</h1>
        <h2>Aspiring Developer | Student</h2>
        <p>
          Thanks for checking out my portfolio. Feel free to reach out
          or download my resume. The desktop view is much better and you
          will be able to get the full experience.
        </p>
      </div>

      <div className="action-buttons">
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <a className="resume-button" href={EvanNgoResume} download="EvanNgoResume.pdf">
          DOWNLOAD RESUME
        </a>
      </div>

      {/* <div className="organizations">
        <h3>Organizations</h3>
        <div className="org-icons">
          <img src={AKPSI} alt="Alpha Kappa Psi" className="org-icon akpsi" />
          <img src={HackUTD} alt="HackUTD" className="org-icon" />
          <img src={JPMorgan} alt="JP Morgan" className="org-icon" />
        </div>
      </div> */}
    </div>
  );
};

export default MobileHome; 