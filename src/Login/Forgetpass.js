import React, { useState } from "react";
import "./Forgetpass.css";
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Forgetpass = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your registered email.");
      return;
    }

    console.log("Reset link sent to:", email);

    setMessage("Reset link sent! Check your email.");
  };
  return (
    <>
    <Navbar/>
    <div className="fp-container">
      <div className="fp-card">
        <h2 className="fp-title">🔐 Reset Password</h2>
        <p className="fp-subtitle">
          Don’t worry, we’ll help you recover your account
        </p>

        <form onSubmit={handleSubmit} className="fp-form">
          <div className="fp-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="fp-btn">
            Send Reset Link
          </button>
        </form>

        {message && <p className="fp-message">{message}</p>}

        <p className="fp-back">
          <Link to="/login">← Back to Login</Link>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Forgetpass;