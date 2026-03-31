import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { toast } from "react-toastify";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Register = () => {
  const [activeTab, setActiveTab] = useState("patient");
  const [loading, setLoading] = useState(false);

  const [patientData, setPatientData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [doctorData, setDoctorData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    specialization: "",
    qualification: "",
    availability: "",
    currentHospital: "",
  });

  const handleChange = (e, type) => {
    if (type === "patient") {
      setPatientData({ ...patientData, [e.target.name]: e.target.value });
    } else {
      setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let toastId;

    try {
      setLoading(true);

      // 🔥 LOADING TOAST
      toastId = toast.loading("Registering...");

      const url =
        activeTab === "patient"
          ? "https://beedoc.onrender.com/register"
          : "https://beedoc.onrender.com/doctorregister";

      const data = activeTab === "patient" ? patientData : doctorData;

      const res = await axios.post(url, data);

      // ✅ SUCCESS TOAST
      toast.update(toastId, {
        render: res.data.message || "Registered successfully",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });

      if (activeTab === "patient") {
        setPatientData({ name: "", mobile: "", email: "", password: "" });
      } else {
        setDoctorData({
          name: "",
          phone: "",
          email: "",
          password: "",
          specialization: "",
          qualification: "",
          availability: "",
          currentHospital: "",
        });
      }
    } catch (err) {
      //  ERROR TOAST
      toast.update(toastId, {
        render:
          err.response?.data?.message || "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="register-wrapper">
      <div className="register-container">
        <div className="register-card">
          <div className="header">
            <h2>BeeDoc</h2>
          </div>

          <p>Join as Patient or Doctor</p>

          <div className="tabs">
            <button
              className={activeTab === "patient" ? "active" : ""}
              onClick={() => setActiveTab("patient")}
            >
              Patient
            </button>

            <button
              className={activeTab === "doctor" ? "active" : ""}
              onClick={() => setActiveTab("doctor")}
            >
              Doctor
            </button>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Full Name"
              value={
                activeTab === "patient"
                  ? patientData.name
                  : doctorData.name
              }
              onChange={(e) => handleChange(e, activeTab)}
              required
            />

            <input
              name={activeTab === "patient" ? "mobile" : "phone"}
              placeholder="Phone Number"
              value={
                activeTab === "patient"
                  ? patientData.mobile
                  : doctorData.phone
              }
              onChange={(e) => handleChange(e, activeTab)}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={
                activeTab === "patient"
                  ? patientData.email
                  : doctorData.email
              }
              onChange={(e) => handleChange(e, activeTab)}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={
                activeTab === "patient"
                  ? patientData.password
                  : doctorData.password
              }
              onChange={(e) => handleChange(e, activeTab)}
              required
            />

            {activeTab === "doctor" && (
              <>
                <select
                  name="specialization"
                  value={doctorData.specialization}
                  onChange={(e) => handleChange(e, "doctor")}
                  required
                >
                  <option value="">Specialization</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Neurologist</option>
                  <option>Orthopedic</option>
                  <option>General Physician</option>
                </select>

                <input
                  name="qualification"
                  placeholder="Qualification"
                  value={doctorData.qualification}
                  onChange={(e) => handleChange(e, "doctor")}
                  required
                />

                <select
                  name="availability"
                  value={doctorData.availability}
                  onChange={(e) => handleChange(e, "doctor")}
                  required
                >
                  <option value="">Availability</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Flexible</option>
                </select>

                <input
                  name="currentHospital"
                  placeholder="Hospital / Clinic"
                  value={doctorData.currentHospital}
                  onChange={(e) => handleChange(e, "doctor")}
                  required
                />
              </>
            )}

            <button className="submit-btn">
              {loading ? "Please wait..." : `Register as ${activeTab}`}
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;

