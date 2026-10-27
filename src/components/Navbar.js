import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="crane-navbar">
      <Link to="/" className="crane-navbar-brand">
        <span className="crane-navbar-logo">CC</span>
        <span>
          <strong>CRANE COLLEGE</strong>
          <small>EDUCATION · INNOVATION · EXCELLENCE</small>
        </span>
      </Link>

      <nav className="crane-navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/programmes">Programmes</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/students">Students</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;