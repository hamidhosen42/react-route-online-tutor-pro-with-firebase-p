import React from 'react';
import "./Footer.css";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <div className="footer-button">
        <footer className="text-center text-white mt-5 bg-dark p-5 footer">
          <p>
            <small>Copyright @ {year} : Professional Tutor Pro </small>
          </p>
        </footer>
      </div>
    );
};

export default Footer;