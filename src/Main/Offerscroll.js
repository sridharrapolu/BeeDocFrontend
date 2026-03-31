import React from "react";
import "./offerscroll.css";

const offers = [
  "Free Health Checkup Camp this Sunday",
  "20% OFF on all consultations",
  "Book appointment with top specialists",
  "Emergency services available 24/7",
  "Free vaccination drive this week",
];

const Offerscroll = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        {offers.concat(offers).map((offer, index) => (
          <span key={index} className="ticker-item">
            {offer}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Offerscroll;