import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./MobileContact.scss";
import emailjs from "@emailjs/browser";

const MobileContact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yvo1kuz",
        "template_175d9t5",
        refForm.current,
        "9C5x5G_wF-mbEw27T"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="mobile-contact-page">
      <div className="text-zone">
        <h1>Contact Me</h1>
        <p>
          Please feel free to reach out to me about any questions or concerns. I
          am an aspiring software developer and looking for any experience.
          Please don't hesitate to fill out the form below.
        </p>
      </div>

      <div className="contact-form">
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className="half">
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default MobileContact;
