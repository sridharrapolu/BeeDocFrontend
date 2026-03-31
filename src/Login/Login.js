import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://beedoc.onrender.com/api/admin/login",
        formData
      );
      // STORE TOKEN
      localStorage.setItem("token", res.data.token);
      // SUCCESS TOAST
      toast.success("Login successful ✅");
      navigate("/admin");

    } catch (err) {
      console.error(err);

      // ERROR TOAST
      toast.error("Invalid credentials ❌");
    }
  };
  return (
    <>
    <Navbar/>
    <div className="login-container">
      <div className="login-card">
        <h2 className="brand">BeeDOC</h2>
        <p className="subtitle">Your Health, Our Priority</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div className="options">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p className="register-text">
          New here? <Link to="/register">Register Now</Link>
        </p>

        <p className="register-text">
          Are you a Doctor? <Link to="/doctorlogin">Login as Doctor</Link>
        </p>
      </div>
    </div>
    <Footer/></>
  );
};

export default Login;

