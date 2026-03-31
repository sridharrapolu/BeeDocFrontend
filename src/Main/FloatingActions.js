import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingActions.css";

const FloatingActions = () => {
  const navigate = useNavigate();
  const [showAI, setShowAI] = useState(false);

  return (
    <>
      <div className="fa-container">

        <button
          className="fa-btn fa-book"
          onClick={() => navigate("/appointment")}
        >
          <i className="bi bi-calendar-check"></i>
          <span>Book Appointment</span>
        </button>

        <button
          className="fa-btn fa-ai"
          onClick={() => setShowAI(!showAI)}
        >
          <i className="bi bi-cpu"></i>
          <span>Assistant</span>
        </button>

      </div>

      {/* AI PANEL */}
      <div className={`fa-panel ${showAI ? "fa-open" : ""}`}>
        
        <div className="fa-header">
          <span>Assistant</span>
          <button onClick={() => setShowAI(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="fa-body">
          <div className="fa-msg fa-bot">
            Hello, how can I help you?
          </div>
        </div>

        <div className="fa-footer">
          <input placeholder="Ask something..." />
          <button>
            <i className="bi bi-send"></i>
          </button>
        </div>

      </div>
    </>
  );
};

export default FloatingActions;