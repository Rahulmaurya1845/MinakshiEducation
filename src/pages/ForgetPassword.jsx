import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";
import logo from "../images/logo.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password recovery link sent to " + email);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <img src={logo} alt="Logo" className="forgot-logo" />

        <h2 className="forgot-title">
          Meenakshi Education Sansthan - Salumber
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="recover-btn">
            🔐 Recover Password
          </button>
        </form>

        <button className="back-btn" onClick={() => navigate("/login")}>
          ← Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
