import React from 'react';
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <div className="footer-button bg-dark">
        <footer className="text-center services-container text-white mt-5  p-5 footer">
          <div className="text-start">
            <h5>Information</h5>
            <p>Service</p>
            <p>Blog</p>
            <p>About</p>
            <p>Login</p>
          </div>
          <div className="text-start">
            <h5>Service</h5>
            <p>Math</p>
            <p>Physics</p>
            <p>Chemistry</p>
            <p>Biology...</p>
          </div>
          <div className="text-start">
            <div className="icon-size">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaGooglePlusG />
            </div>
            <div></div>
          </div>
        </footer>
        <p className="text-center text-white pb-5">
          <small>Copyright @ {year} : Professional Tutor Pro </small>
        </p>
      </div>
    );
};

export default Footer;