import React from "react";
import "./whychooseus.css";

const features = [
  {
    icon: "🩺",
    title: "Expert Doctors",
    desc: "Highly qualified professionals with years of experience.",
  },
  {
    icon: "🏥",
    title: "Modern Facilities",
    desc: "Advanced equipment and world-class infrastructure.",
  },
  {
    icon: "⏱️",
    title: "24/7 Support",
    desc: "We are always available for your emergency needs.",
  },
  {
    icon: "💊",
    title: "Affordable Care",
    desc: "Quality healthcare services at reasonable cost.",
  },
  {
    icon: "🧪",
    title: "Accurate Diagnosis",
    desc: "Precision testing and reliable results every time.",
  },
  {
    icon: "❤️",
    title: "Patient Care",
    desc: "We treat every patient with compassion and respect.",
  },
];

const Whychooseus = () => {
  return (
    <section className="why">
      <div className="why-header">
        <h2>Why Choose Us</h2>
        <p>Your health is our priority — experience care like never before</p>
      </div>

      <div className="why-grid">
        {features.map((item, i) => (
          <div className="why-card" key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychooseus;