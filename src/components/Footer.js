```jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column footer-about">
          <div className="footer-logo">
            <div className="logo-symbol">C</div>

            <div>
              <div className="logo-name">CRANE</div>
              <div className="logo-subtitle">COLLEGE</div>
            </div>
          </div>

          <p>
            Building knowledge, developing skills and preparing students
            for a changing world.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/about">About Us</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/students">Students</Link>
        </div>

        <div className="footer-column">
          <h3>Information</h3>

          <Link to="/research">Research</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admissions">Application</Link>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>📍 Maseru, Lesotho</p>
          <p>☎ +266 0000 0000</p>
          <p>✉ info@cranecollege.ac.ls</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Crane College. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
```
