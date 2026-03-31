import React, { useState, useEffect } from "react";
import "./carousel.css";

const slides = [
  {
    image: "/img1.jpg",
    title: "Compassionate Care",
    desc: "Where every life is treated with dignity and attention",
  },
  {
    image: "/img2.jpg",
    title: "Trusted Medical Experts",
    desc: "Delivering excellence with experience and precision",
  },
  {
    image: "/img3.jpg",
    title: "24/7 Patient Support",
    desc: "Always here when you need us the most",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hc-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hc-slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt="slide" className="hc-image" />

          <div className="hc-overlay"></div>

          <div className="hc-content">
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        className="hc-arrow hc-left"
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
      >
        ❮
      </button>

      <button
        className="hc-arrow hc-right"
        onClick={() =>
          setCurrent(current === slides.length - 1 ? 0 : current + 1)
        }
      >
        ❯
      </button>

      {/* Dots */}
      <div className="hc-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`hc-dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;