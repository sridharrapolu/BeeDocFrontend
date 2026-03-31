import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UIHospitalscroll.css";

const UIHospitalscroll = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios
      .get("https://beedoc.onrender.com/api/hospital")
      .then((res) => setHospitals(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="uihs-container">
      
      <h2 className="uihs-title">
        Our <span className="text-primary">Trusted</span> Hospital Partners
      </h2>

      <div className="uihs-scroll-wrapper">
        <div className="uihs-scroll-track">

          {/* duplicate for smooth infinite scroll */}
          {[...hospitals, ...hospitals].map((h, i) => (
            <div className="uihs-logo-box" key={i}>
              <img src={h.logo} alt="hospital" />
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default UIHospitalscroll;