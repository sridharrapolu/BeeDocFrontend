import React, { useEffect, useRef, useState } from "react";
import "./counterup.css";

const stats = [
  { number: 5000, label: "Happy Patients" },
  { number: 120, label: "Expert Doctors" },
  { number: 50, label: "Departments" },
  { number: 15, label: "Years Experience" },
];

const CounterCard = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || started.current) return;

      const top = ref.current.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (top < screenHeight - 100) {
        started.current = true;

        let current = 0;
        const step = Math.ceil(number / 80);

        const interval = setInterval(() => {
          current += step;

          if (current >= number) {
            setCount(number);
            clearInterval(interval);
          } else {
            setCount(current);
          }
        }, 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [number]);

  return (
    <div className="counter-card" ref={ref}>
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
};

const Counterup = () => {
  return (
    <section
      className="counter-section"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="overlay"></div>

      <div className="counter-content">
        <h2>Our Impact in Numbers</h2>
        <p>Delivering trusted healthcare with excellence and care</p>

        <div className="counter-container">
          {stats.map((item, i) => (
            <CounterCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counterup;