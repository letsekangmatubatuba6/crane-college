
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ELearningLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
  event.preventDefault();

  const studentEmail = email.trim().toLowerCase();

  if (!studentEmail || !password.trim()) {
    setError("Please enter your email and password.");
    return;
  }

  try {
    localStorage.setItem("studentEmail", studentEmail);
    setError("");
    navigate("/e-learning/dashboard");
  } catch (error) {
    setError("Unable to log in. Please try again.");
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          maxWidth: "100%",
          background: "#fff",
          padding: "35px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ color: "#102a43", textAlign: "center" }}>
          Student Login
        </h2>

        <p style={{ textAlign: "center", color: "#627d98" }}>
          Sign in to access your e-learning dashboard.
        </p>

        {error && (
          <p
            role="alert"
            style={{
              background: "#ffe8e8",
              color: "#b00020",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {error}
          </p>
        )}

        
<form onSubmit={handleLogin}>
  <label htmlFor="student-email">Email</label>

  <input
    id="student-email"
    type="email"
    placeholder="student@cranecollege.edu"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    autoComplete="username"
    required
    style={{
      width: "100%",
      padding: "12px",
      marginTop: "8px",
      marginBottom: "15px",
      boxSizing: "border-box",
    }}
  />

  <label htmlFor="student-password">Password</label>

  <input
    id="student-password"
    type="password"
    placeholder="Enter password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    autoComplete="current-password"
    required
    style={{
      width: "100%",
      padding: "12px",
      marginTop: "8px",
      marginBottom: "20px",
      boxSizing: "border-box",
    }}
  />

  
</form>


      
      </div>
    </div>
  );
}

export default ELearningLogin;
