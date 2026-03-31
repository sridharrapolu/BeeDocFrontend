import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UIHospitals.css";

const UIHospitals = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios
      .get("https://beedoc.onrender.com/api/hospital")
      .then((res) => setHospitals(res.data.slice(0, 4)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="uih2-container">
      <h2 className="uih2-title">
        Top <span>Hospitals</span>
      </h2>

      <div className="uih2-grid">
        {hospitals.map((h) => (
          <div className="uih2-card" key={h._id}>
            
            <div className="uih2-image">
              <img src={h.images?.[0]} alt="hospital" />
            </div>

            <div className="uih2-body">
              <img src={h.logo} alt="logo" className="uih2-logo" />

              <h3>{h.name}</h3>
              <p className="uih2-address">{h.address}</p>

              <p className="uih2-desc">
                {h.description?.slice(0, 90)}...
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default UIHospitals;