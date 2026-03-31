import React, { useState, useEffect } from "react";
import "./aboutus.css";

const images = ["/about1.jpg", "/about2.jpg", "/about3.jpg"];

const Aboutus = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setAnimate(false);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = (index + 1) % images.length;

  return (
    <section className="about">
      {/* LEFT */}
      <div className="about-left">
        <span className="tag">ABOUT US</span>
        <h2>
          Caring for Your <span>Health</span>
        </h2>

        <div className="line"></div>

        <p>
          We provide world-class healthcare services with compassion and modern
          technology. Our goal is to ensure every patient receives the best
          treatment possible.
        </p>

        <p>
          With experienced doctors and 24/7 support, we are always here for you.
        </p>

        <button className="btn">Learn More</button>
      </div>

      {/* RIGHT */}
      <div className="about-right">
        {/* BACK */}
        <img
          src={images[index]}
          className={`back ${animate ? "back-anim" : ""}`}
          alt=""
        />

        {/* FRONT (overlapping bottom-right) */}
        <img
          src={images[next]}
          className={`front ${animate ? "front-anim" : ""}`}
          alt=""
        />
      </div>
    </section>
  );
};

export default Aboutus;