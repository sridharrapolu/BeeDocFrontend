import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("doctorName");
    if (name) setDoctor({ name });
  }, []);

  return (
    <div className="dd-container">

      {/* SIDEBAR */}
      <aside className="dd-sidebar">
        <h2 className="dd-logo">🩺 BeeDOC</h2>

        <nav>
          <NavLink to="" end>
            <i className="bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="doctorappointments">
            <i className="bi bi-calendar-check"></i>
            <span>Appointments</span>
          </NavLink>

          <NavLink to="doctorprofile">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </NavLink>

          <NavLink to="notifications">
            <i className="bi bi-bell"></i>
            <span>Notifications</span>
          </NavLink>

          <NavLink to="system">
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </NavLink>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="dd-main">

        {/* HEADER */}
        <header className="dd-header">
          <div className="dd-header-left">
            {/* <h2>Dashboard</h2> */}
            <h2>Welcome back, Dr. {doctor?.name || "..."}</h2>
          </div>

          <div className="dd-user">
            <div className="avatar">
              {doctor?.name?.charAt(0) || "D"}
            </div>
            <span>Dr. {doctor?.name || "Loading..."}</span>
          </div>
        </header>

        {/* CONTENT */}
        <main className="dd-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DoctorDashboard;