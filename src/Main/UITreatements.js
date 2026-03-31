import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UITreatements.css";
import { useNavigate } from "react-router-dom";

const UITreatements = () => {
  const [treatments, setTreatments] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://beedoc.onrender.com/treatement")
      .then((res) => setTreatments(res.data))
      .catch((err) => console.log(err));
  }, []);

  const visible = showAll ? treatments : treatments.slice(0, 4);

  return (
    <section className="treat-wrap">
      <div className="treat-head">
        <h2>Our Treatments</h2>
        <p>Specialized care across multiple medical domains</p>
      </div>

      <div className="treat-grid">
        {visible.map((t) => (
          <div className="treat-card" key={t._id}>
            
            {/* IMAGE */}
            <div className="treat-img">
              <img
                src={t.image?.url || "https://via.placeholder.com/400"}
                alt={t.name}
              />
            </div>

            {/* CONTENT */}
            <div className="treat-body">
              <h3>{t.name}</h3>

              <button
                onClick={() =>
                  navigate(`/treatment/${t._id}`, { state: t })
                }
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {treatments.length > 4 && (
        <div className="treat-more">
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default UITreatements;