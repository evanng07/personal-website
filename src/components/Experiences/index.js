import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./index.scss";
import "./.style.min.css";
import WHSIcon from "../../../src/assets/images/WHS.png";
import UTDIcon from "../../../src/assets/images/utd-logo.png";
import WalmartIcon from "../../../src/assets/images/walmart.png";
import FannieIcon from "../../../src/assets/images/fanniemae.png";
import JPMorganIcon from "../../../src/assets/images/jp-morgan.png";
import MobileExperiences from "./MobileExperiences";

const Experiences = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileExperiences /> : (
    <>
      <div className="container experiences-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                "M",
                "y",
                " ",
                "E",
                "x",
                "p",
                "e",
                "r",
                "i",
                "e",
                "n",
                "c",
                "e",
                "s",
              ]}
              index={15}
            />
          </h1>
        </div>
        <div className="timeline">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="Summer 2024"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<img src={JPMorganIcon} alt="logo" className="vertical-timeline-element-icon" />}
            >
              <h3 className="vertical-timeline-element-title">
                JPMorgan Chase & Co. | Software Engineering Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Plano, TX</h4>
              <p>
                Java, Springboot
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Summer 2023"
              iconStyle={{ background: "#fff", color: "#fff" }}
              icon={<img src={FannieIcon} alt="logo" className="vertical-timeline-element-icon" />}
            >
              <h3 className="vertical-timeline-element-title">Fannie Mae | Software Engineering Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Plano, TX
              </h4>
              <p>
                 Python, AWS (S3, EC2, Lambda, CloudWatch, DynamoDB), AngularJS, Typescript
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Summer 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<img src={WalmartIcon} alt="logo" className="vertical-timeline-element-icon" />}
            >
              <h3 className="vertical-timeline-element-title">Walmart | Electronics Sales Associate</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Wylie, TX
              </h4>
              <p>Customer Experience, Sales, Inventory</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2021 - 2025"
              iconStyle={{ background: "#fff", color: "#fff" }}
              icon={<img src={UTDIcon} alt="logo" className="vertical-timeline-element-icon" />}
            >
              <h3 className="vertical-timeline-element-title">
                University of Texas at Dallas
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor's Degree in Computer Science
              </h4>
              <p>Alpha Kappa Psi, HackUTD, Academic Excellence Scholarship, Dean's List Recipient</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017 - 2021"
              iconStyle={{ background: "#fff", color: "#fff" }}
              icon={<img src={WHSIcon} alt="logo" className="vertical-timeline-element-icon" />}
            >
              <h3 className="vertical-timeline-element-title">
                Wylie High School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                High School Degree
              </h4>
              <p>NHS, Marching Band, Varsity Soccer, ASA, Computer Science Club</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            />
          </VerticalTimeline>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Experiences;
