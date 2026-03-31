import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./UISubtreatements.css";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const UISubtreatements = () => {
  const { treatmentId } = useParams();
  const location = useLocation();
  const [subTreatments, setSubTreatments] = useState([]);
  const treatment = location.state;
  useEffect(() => {
    if (treatmentId) {
      fetchSubTreatments();
    }
  }, [treatmentId]);
  //  FETCH FROM YOUR BACKEND
  const fetchSubTreatments = () => {
    axios
      .get(`https://beedoc.onrender.com/api/subtreatments/${treatmentId}`)
      .then((res) => {
        console.log("SUB DATA:", res.data);
        setSubTreatments(res.data);
      })
      .catch((err) => console.log("ERROR:", err));
  };
  return (
    <div className="ui-sub-container">
      <Navbar/>
      {/* HEADER */}
      <div className="ui-header">
        <h1>{treatment?.name || "Treatment"}</h1>
        <p>Choose a service to continue</p>
      </div>
      {/* EMPTY STATE */}
      {subTreatments.length === 0 && (
        <div className="empty-box">
          <p>No SubTreatments available</p>
        </div>
      )}
      {/* GRID */}
      <div className="ui-grid">
        {subTreatments.map((item) => (
          <div className="ui-card" key={item._id}>
            <div className="card-top">
              <h3>{item.name}</h3>
            </div>
            <p className="desc">{item.description}</p>
            <NavLink to={`/doctors/${treatmentId}`} state={item} className="text-decoration-none">
              <button className="cta-btn"> Find Specialists → </button>
            </NavLink>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default UISubtreatements;