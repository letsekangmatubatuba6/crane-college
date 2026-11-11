
import React from "react";
import { Link } from "react-router-dom";
//import "./Research.css";

function Research() {
  return (
    <div className="research-page">

      {/* HEADER */}
      <header className="crane-about-header">
        <Link to="/" aria-label="Crane College home">
            <img
              src="/crane.ico"
              alt="Crane College Logo"
              className="logo-image"
            />
          </Link>

        <nav className="crane-about-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/students">Students</Link>
          <Link to="/research" className="active">Research</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="research-hero">
        <div className="research-hero-content">
          <p className="research-eyebrow">
            RESEARCH & INNOVATION
          </p>

          <h1>
            Creating Knowledge.<br />
            Inspiring Innovation.
          </h1>

          <p className="research-hero-description">
            Exploring ideas, advancing knowledge and developing
            innovative solutions to real-world challenges.
          </p>

          <Link to="/programmes" className="research-hero-button">
            Explore Our Programmes
          </Link>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="research-intro-section">
        <div className="research-container">

          <div className="research-intro">
            <span className="research-section-label">
              OUR RESEARCH
            </span>

            <h2>
              Innovation for a better future.
            </h2>

            <p>
              Crane College encourages students, academics and
              industry partners to participate in research that
              contributes to society. We believe that knowledge,
              creativity and innovation are essential to addressing
              today's challenges and shaping tomorrow's opportunities.
            </p>
          </div>

          <div className="research-highlight">
            <div className="research-highlight-number">01</div>
            <div>
              <h3>Research with purpose</h3>
              <p>
                We encourage practical research that responds to
                community needs and supports sustainable development.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="research-areas-section">
        <div className="research-container">

          <div className="research-heading">
            <span className="research-section-label">
              AREAS OF FOCUS
            </span>

            <h2>Discover our research areas.</h2>

            <p>
              Our research interests cover different disciplines
              that support innovation, knowledge and development.
            </p>
          </div>

          <div className="research-grid">

            <div className="research-card">
              <span className="research-card-number">01</span>
              <div className="research-card-icon">⌘</div>
              <h3>Technology & Innovation</h3>
              <p>
                Software development, cybersecurity, artificial
                intelligence, information systems and digital
                transformation.
              </p>
              <span className="research-card-line"></span>
            </div>

            <div className="research-card">
              <span className="research-card-number">02</span>
              <div className="research-card-icon">▥</div>
              <h3>Business & Entrepreneurship</h3>
              <p>
                Entrepreneurship, business management, financial
                development and innovative business solutions.
              </p>
              <span className="research-card-line"></span>
            </div>

            <div className="research-card">
              <span className="research-card-number">03</span>
              <div className="research-card-icon">▤</div>
              <h3>Education & Development</h3>
              <p>
                Teaching methods, student learning, educational
                technology and the advancement of education.
              </p>
              <span className="research-card-line"></span>
            </div>

          </div>
        </div>
      </section>

      {/* INNOVATION BANNER */}
      <section className="research-banner">
        <div className="research-banner-content">
          <span>THE FUTURE STARTS WITH IDEAS</span>

          <h2>
            Think beyond boundaries.<br />
            Create meaningful change.
          </h2>

          <p>
            At Crane College, we believe in the power of knowledge
            to transform individuals, industries and communities.
          </p>

          <Link to="/contact" className="research-banner-button">
            Connect With Us
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Research;
