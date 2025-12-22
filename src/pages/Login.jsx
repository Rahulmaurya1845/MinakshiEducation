import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../images/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (userId === "admin" && password === "1234") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("These credentials do not match our records.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* LOGO */}
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="login-logo" />
        </div>

        <h2 className="title-text">
          Meenakshi Education Sansthan - Salumber
        </h2>

        <form onSubmit={handleLogin}>
          <label>Your User Id *</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User Id"
          />

          {error && <p className="error-text">{error}</p>}

          <label>Enter Password *</label>
          <input
            type={showPass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />

          {/* SHOW + FORGOT */}
          <div className="password-row">
            <button
              type="button"
              className="show-pass"
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? "Hide Password" : "👁 Show Password"}
            </button>

            <Link to="/forgot-password" className="forgot-link">
              Forgot Your Password?
            </Link>
          </div>

          <div className="btn-row">
            <button type="submit" className="login-btn">
              🔐 Login
            </button>

            <button
              type="button"
              className="website-btn"
              onClick={() => navigate("/")}
            >
              🌐 Website
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
