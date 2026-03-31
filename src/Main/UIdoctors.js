import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./UIdoctors.css";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const UIDoctors = () => {
  const location = useLocation();
  const sub = location.state;
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetchDoctors();
  }, []);
  const fetchDoctors = () => {
    axios
      .get("https://beedoc.onrender.com/doctors")
      .then((res) => {
        const allDoctors = res.data;
        const treatment = sub?.name?.toLowerCase() || "";
        let keyword = "";
        //  SMART MEDICAL MAPPING
        if (
          treatment.includes("epilepsy") ||
          treatment.includes("stroke") ||
          treatment.includes("migraine")
        ) {
          keyword = "neuro";
        }
        else if (
          treatment.includes("asthma") ||
          treatment.includes("lung") ||
          treatment.includes("oxygen") ||
          treatment.includes("breathing")
        ) {
          keyword = "pulmo"; // if not available → change to "general"
        }

        else if (
          treatment.includes("heart") ||
          treatment.includes("ecg") ||
          treatment.includes("angiography") ||
          treatment.includes("angiogram")
        ) {
          keyword = "cardio";
        }
        else if (
          treatment.includes("bone") ||
          treatment.includes("physiotherapy") ||
          treatment.includes("joint") ||
          treatment.includes("fracture")
        ) {
          keyword = "ortho";
        }
        else if (
          treatment.includes("skin") ||
          treatment.includes("hair") ||
          treatment.includes("acne")
        ) {
          keyword = "derma";
        }

        //  IMPORTANT: avoid showing all doctors if no match
        const filtered = keyword
          ? allDoctors.filter((doc) =>
            doc.specialization
              ?.toLowerCase()
              .includes(keyword)
          )
          : [];

        setDoctors(filtered);
      })
      .catch((err) => console.log(err));
  };
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className="doc-container">
      {/* HEADER */}
      <div className="doc-header">
        <h1>{sub?.name}</h1>
        <p>Available specialists</p>
      </div>
      {/* EMPTY STATE */}
      {doctors.length === 0 && (
        <p className="empty">No doctors available</p>
      )}
      {/* DOCTORS GRID */}
      <div className="doc-grid">
        {doctors.map((doc) => (
          <div className="doc-card" key={doc._id}>
            <h3>{doc.name}</h3>
            <p className="spec">{doc.specialization}</p>
            <p>{doc.qualification}</p>
            <p>{doc.currentHospital}</p>
            <button
              className="book-btn"
              onClick={() =>
                navigate("/Docappointment", {
                  state: { doctor: doc, treatment: sub?.name, hospital: doc.currentHospital }
                })
              }
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

    </div>
    <Footer/>
    </>
  );
};
export default UIDoctors;