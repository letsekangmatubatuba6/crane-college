
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const socialMedia = [
    {
      name: "Facebook",
      icon: "f",
      url: "https://www.facebook.com/",
    },
    {
      name: "Instagram",
      icon: "◎",
      url: "https://www.instagram.com/",
    },
    {
      name: "X (Twitter)",
      icon: "𝕏",
      url: "https://x.com/",
    },
    {
      name: "TikTok",
      icon: "♪",
      url: "https://www.tiktok.com/",
    },
    {
      name: "YouTube",
      icon: "▶",
      url: "https://www.youtube.com/",
    },
    {
      name: "LinkedIn",
      icon: "in",
      url: "https://www.linkedin.com/",
    },
    {
      name: "WhatsApp",
      icon: "☏",
      url: "https://www.whatsapp.com/",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT CRANE COLLEGE */}
        <div className="footer-column footer-about">
          <Link to="/" className="footer-logo">
            <div className="logo-symbol">C</div>

            <div>
              <div className="logo-name">CRANE</div>
              <div className="logo-subtitle">COLLEGE</div>
            </div>
          </Link>

          <p>
            Building knowledge, developing skills and preparing students
            for a changing world.
          </p>

          {/* SOCIAL MEDIA */}
          <h3 className="social-heading">Follow Us</h3>

          <div className="footer-socials">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`social-link social-${social.name
                  .toLowerCase()
                  .replace(/[^a-z]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/about">About Us</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/students">Students</Link>
        </div>

        {/* INFORMATION */}
        <div className="footer-column">
          <h3>Information</h3>
          <Link to="/research">Research</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admissions">Application</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>📍 Maseru, Lesotho</p>
          <p>☎ +266 0000 0000</p>
          <p>✉ info@cranecollege.ac.ls</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Crane College. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
