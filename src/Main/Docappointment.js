import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Docappointment.css";
import Beedocapp from "../Componets/Beedocapp";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Docappointment = () => {
  const location = useLocation();
  const { doctor, treatment, hospital } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: "",
    mobile: "",
    email: "",
    date: "",
    message: "",
  });

  if (!doctor) {
    return <h2 className="docapp-no-doc">No Doctor Selected ❌</h2>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      doctorName: doctor.name,
      specialization: doctor.specialization,
      treatment,
      hospital,
      ...formData,
    };

    const toastId = toast.loading("Booking appointment...");

    try {
      await axios.post("https://beedoc.onrender.com/api/appointments", data);

      toast.update(toastId, {
        render: "Appointment booked successfully",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });

      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.log(err);

      toast.update(toastId, {
        render: "Error booking appointment",
        type: "error",
        isLoading: false,
        autoClose: 2500,
      });
    }
  };

  return (
    <>
    <Navbar/>
    <div className="docapp-bg">
      <div className="docapp-card">
        <h2 className="docapp-title">
          <i className="bi bi-calendar-check"></i> Book Appointment
        </h2>

        <p className="docapp-warning">
          <i className="bi bi-exclamation-triangle"></i>
          Please verify your details carefully before confirming.
        </p>

        <form onSubmit={handleSubmit} className="docapp-form-grid">

          <div className="docapp-input-group">
            <i className="bi bi-person"></i>
            <input
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="docapp-input-group">
            <i className="bi bi-telephone"></i>
            <input
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="docapp-input-group">
            <i className="bi bi-envelope"></i>
            <input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="docapp-input-group">
            <i className="bi bi-calendar-date"></i>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* readonly */}
          <input className="docapp-readonly" value={doctor.name} disabled />
          <input className="docapp-readonly" value={doctor.specialization} disabled />
          <input className="docapp-readonly" value={treatment} disabled />
          <input className="docapp-readonly" value={hospital} disabled />

          <div className="docapp-input-group docapp-full">
            <i className="bi bi-chat-left-text"></i>
            <textarea
              name="message"
              placeholder="Describe your problem..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="docapp-submit-btn">
            <i className="bi bi-check-circle"></i> Confirm Appointment
          </button>
        </form>
      </div>
    </div>
    <Beedocapp/>
    <Footer/>
    </>
  );
};

export default Docappointment;