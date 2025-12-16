import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

// import loginBg from "../images/randomLoginBg.jpg";
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
    <div className="login-container" style={{ backgroundImage: `url()` }}>
      <div className="login-box">

        {/* PERFECT CENTER LOGO */}
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="login-logo" />
        </div>

        <h2 className="title-text">Meenakshi Education Sansthan - Salumber</h2>

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

          {/* SHOW + FORGOT IN ONE LINE */}
          <div className="password-row">
            <span className="show-pass" onClick={() => setShowPass(!showPass)}>
              👁 Show Password
            </span>

            <Link to="/forgot-password" className="forgot-link">
              Forgot Your Password?
            </Link>
          </div>

          <div className="btn-row">
            <button type="submit" className="login-btn">🔐 Login</button>

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
