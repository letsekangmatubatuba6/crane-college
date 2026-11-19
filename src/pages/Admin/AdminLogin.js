import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import API_BASE_URL from "../../api";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data.admin));

      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">CC</div>

        <p className="admin-login-label">CRANE COLLEGE</p>

        <h1>Administrator Login</h1>

        <p className="admin-login-description">
          Sign in to access the college administration system.
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="admin-email">Email Address</label>
          <input
            id="admin-email"
            type="email"
            placeholder="Enter your administrator email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && <div className="admin-login-error">{error}</div>}
          {success && <div className="admin-login-success">{success}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "SIGN IN"}
          </button>
        </form>

        <p className="admin-login-footer">
          Crane College Administration
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
