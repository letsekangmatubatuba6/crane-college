```jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-container">

        <Link to="/" className="logo">
          <div className="logo-symbol">C</div>

          <div>
            <div className="logo-name">CRANE</div>
            <div className="logo-subtitle">COLLEGE</div>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/students">Students</Link>
          <Link to="/research">Research</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/admissions" className="nav-button">
          Apply Now
        </Link>

      </div>

    </header>
  );
}

export default Navbar;
```
