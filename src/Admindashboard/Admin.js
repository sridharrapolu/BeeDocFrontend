import React, { useEffect, useState } from 'react';
import './Admin.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {
  const [adminName, setAdminName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("adminName");
    if (name) setAdminName(name);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="adm-layout">
      <aside className="adm-sidebar">
        <h4 className="adm-logo">BeeDOC</h4>

        <nav className="adm-nav">
          <NavLink to="treatments" className="adm-link">
            <i className="bi bi-heart-pulse"></i> Treatments
          </NavLink>

          <NavLink to="hospitals" className="adm-link">
            <i className="bi bi-hospital"></i> Hospitals
          </NavLink>

          <NavLink to="doctors" className="adm-link">
            <i className="bi bi-person-badge"></i> Doctors
          </NavLink>

          <NavLink to="adminappointment" className="adm-link">
            <i className="bi bi-calendar-check"></i> Appointments
          </NavLink>

          <NavLink to="registeradmin" className="adm-link">
            <i className="bi bi-people"></i> Registered Admins
          </NavLink>
        </nav>

        {/* LOGOUT */}
        <button className="adm-logout-btn mt-5" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i> Logout
        </button>
      </aside>
      <main className="adm-main">

        <div className="adm-topbar">
          <h5>
            Welcome back{adminName ? `, ${adminName}` : ""} 👋
          </h5>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Admin;