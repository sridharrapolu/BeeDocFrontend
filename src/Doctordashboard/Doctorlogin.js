import React, { useState } from "react";
import "./Doctorlogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Doctorlogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://beedoc.onrender.com/doctorlogin",
        form
      );

      // ✅ STORE DOCTOR SESSION
      localStorage.setItem("doctorId", res.data.doctor._id);
      localStorage.setItem("doctorName", res.data.doctor.name);

      // ✅ REDIRECT
      navigate("/doctordashbord");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="doctor-login">
      <div className="login-box">

        <h2>👨‍⚕️ Doctor Login</h2>
        <p>Access your dashboard</p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </span>
          </div>

          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  );
};

export default Doctorlogin;