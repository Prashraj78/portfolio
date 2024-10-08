import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import { ToastContainer, toast } from "react-toastify";


const Footer = () => {



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      // Your form submission logic here
    } else {
      toast.error("Please fill in all fields.");
    }
  };



  return (
    <>
      <h2 className="head-text">
        Take a <span>coffee</span> & <span>chat</span> with me
      </h2>
      <div className="app__footer-cards">
        <div
          className="app__footer-card "
          onClick={() =>
            window.open("https://www.linkedin.com/in/prashant-patil-56b580229/", "_blank")
          }
        >
          <img src={images.linkedin} alt="linkedIn" />
          <a
            href="https://www.linkedin.com/in/prashant-patil-56b580229/"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="app__footer-card ">
          <img
            src={images.github}
            alt="github"
            onClick={() =>
              window.open("https://github.com/Prashraj78", "_blank")
            }
          />
          <a
            href="https://github.com/Prashraj78"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div
          className="app__footer-card "
          onClick={() => window.open("mailto:prashantrajputaaaa@gmail.com", "_blank")}
        >
          <img src={images.email} alt="email" />
          <a href="mailto:prashantrajputaaaa@gmail.com" className="p-text">
            prashantrajputaaaa@gmail.com
          </a>
        </div>

        <div
          className="app__footer-card"
          onClick={() => window.open("tel:+919284341531", "_blank")}
        >
          <img src={images.mobile} alt="phone" />
          <a href="tel:+917067622076" className="p-text">
            +91 9284341531
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">




        <form action="https://getform.io/f/21edf317-33aa-44bb-b19f-91ea37cc4229" method="POST" required>
          <label>Name :</label>
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="user_name"
            value={name}
            onChange={handleNameChange}
          />
          <label>Email :</label>
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="user_email"
            value={email}
            onChange={handleEmailChange}
          />
          <label>Message :</label>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
          <button type="submit" className="p-text"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disabled={!isFormValid}>
            {!isFormValid ?  "All Field Required " : "Send Message"}

          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
