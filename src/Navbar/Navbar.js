import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid px-4">

        {/* Brand */}
        <Link className="navbar-brand brand-logo" to="/">
          <img 
            src="/favicon.png" 
            alt="logo" 
            className="brand-img"
          />
          BeeDOC
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house me-1"></i> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/treament">
                <i className="bi bi-heart-pulse me-1"></i> Treatments
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/appointment">
                <i className="bi bi-calendar-check me-1"></i> Book Appointment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/offers">
                <i className="bi bi-gift me-1"></i> Offers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                <i className="bi bi-telephone me-1"></i> Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login" className="login-btn ms-lg-3">
                <span>Login</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;