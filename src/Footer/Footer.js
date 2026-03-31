import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="footer-main">
        <div className="container-fluid footer-container">

          {/* Brand */}
          <div className="footer-section">
            <div className="footer-brand">
              <i className="bi bi-hospital me-2"></i>
              <span>BeeDOC</span>
            </div>

            <p className="footer-text">Find trusted hospitals easily</p>
            <p className="footer-text">Book appointments instantly</p>
            <p className="footer-text">Your health, our priority</p>
          </div>

          <div className="footer-divider"></div>

          {/* Treatments */}
          <div className="footer-section">
            <h6>Treatments</h6>
            <p className="footer-link">• Cardiology</p>
            <p className="footer-link">• Neurology</p>
            <p className="footer-link">• Dental</p>
          </div>

          <div className="footer-divider"></div>

          {/* Address */}
          <div className="footer-section d-flex align-items-center">
            <i className="bi bi-geo-alt me-2"></i>
            <span>Hyderabad, India</span>
          </div>

          <div className="footer-divider"></div>

          {/* Contact */}
          <div className="footer-section">
            <h6>Contact</h6>
            <p><i className="bi bi-telephone me-2"></i> +91 7013 525 457</p>
            <p><i className="bi bi-envelope me-2"></i> BeeDoc@Support.com</p>
          </div>

          <div className="footer-divider"></div>

          {/* Subscribe */}
          <div className="footer-section subscribe-box">
            <input
              type="email"
              placeholder="Your Email"
              className="form-control footer-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>

        </div>
      </footer>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} BeeDOC | Developed by Rapolu Sridhar
      </div>
    </>
  );
};

export default Footer;