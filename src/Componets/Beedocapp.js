import React from "react";
import "./Beedocapp.css";

const Beedocapp = () => {
  return (
    <section className="app-section">
      <div className="app-container">

        {/* LEFT CONTENT */}
        <div className="app-content">
          <h1 className="app-title">
            Get the <span>BeeDoc</span> App
          </h1>

          <p className="app-subtitle">
            Book appointments, consult doctors, and manage your health anytime, anywhere.
          </p>

          <div className="app-features">
            <p>✔ Instant Doctor Booking</p>
            <p>✔ 24/7 Online Consultation</p>
            <p>✔ Secure Health Records</p>
          </div>

          <div className="app-buttons">
            <img
              src="/playstore.png"
              alt="Play Store"
              className="store-btn"
            />
            <img
              src="/appstore.png"
              alt="App Store"
              className="store-btn"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="app-image">
          <img
            src="/beedocapp.png"
            alt="BeeDoc App"
          />
        </div>

      </div>
    </section>
  );
};

export default Beedocapp;