import React from "react";
import { Link } from "react-router-dom";


function About() {
return (
<div className="crane-about">
 {/* TOP UTILITY BAR */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-left">
            <span></span>
          </div>

          <div className="top-right">
            <Link to="/students">Students</Link>
            <Link to="/e-learning">E-Learning </Link>
            <Link to="/contact">Staff</Link>
            <Link to="/contact">Alumni</Link>
            <Link to="/contact">Giving</Link>
          </div>
        </div>
      </div>

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
    <Link to="/programmes">Programmes</Link>
    <Link to="/admissions">Admissions</Link>
    <Link to="/students">Students</Link>
    <Link to="/news">News</Link>
    <Link to="/contact">Contact</Link>
  </nav>
</header>

 {/* HERO SECTION */}
<section className="crane-about-hero">
  <div className="crane-about-hero-content">
    <p>ABOUT CRANE COLLEGE</p>

    <h1>
      Education. Innovation.
      <br />
      Excellence.
    </h1>

    <span>
      Discover who we are, what we stand for and our vision
      for the future.
    </span>
  </div>
</section>

  {/* ABOUT CONTENT */}
  <main className="crane-about-content">
    <section className="crane-about-intro">
      <div className="crane-about-picture">
        <div className="crane-about-picture-back" />
        <div className="crane-about-campus-art">
          <div className="crane-about-campus-sky" />
          <div className="crane-about-campus-building">
            <div />
            <div />
            <div />
          </div>
          <div className="crane-about-campus-ground" />
          <div className="crane-about-tree tree-one" />
          <div className="crane-about-tree tree-two" />
        </div>
      </div>

      <div className="crane-about-description">
        <p className="crane-about-label">WHO WE ARE</p>
        <h2>Preparing students for a changing world.</h2>
        <p>
          Crane College is a modern higher education institution
          focused on developing knowledgeable, skilled and
          responsible graduates.
        </p>
        <p>
          Our approach combines academic knowledge with practical
          learning, technology, research and innovation.
        </p>
      </div>
    </section>

    {/* VISION, MISSION AND VALUES */}
    <section className="crane-about-values">
      <article className="crane-about-card">
        <div className="crane-about-card-top">
          <div className="crane-about-icon">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <path d="M3 24s8-12 21-12 21 12 21 12-8 12-21 12S3 24 3 24Z" />
              <circle cx="24" cy="24" r="7" />
            </svg>
          </div>
          <span>01</span>
        </div>
        <h3>Our Vision</h3>
        <i />
        <p>
          To become a respected institution recognised for
          quality education, innovation and positive impact
          on society.
        </p>
      </article>

      <article className="crane-about-card">
        <div className="crane-about-card-top">
          <div className="crane-about-icon gold-icon">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="20" cy="28" r="14" />
              <circle cx="20" cy="28" r="8" />
              <circle cx="20" cy="28" r="2" />
              <path d="M22 26 40 8M31 8h9v9" />
            </svg>
          </div>
          <span>02</span>
        </div>
        <h3>Our Mission</h3>
        <i />
        <p>
          To provide accessible, practical and high-quality
          education that prepares students for meaningful
          careers and responsible citizenship.
        </p>
      </article>

      <article className="crane-about-card">
        <div className="crane-about-card-top">
          <div className="crane-about-icon">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="18" cy="15" r="7" />
              <path d="M5 38v-4c0-7 5-11 13-11s13 4 13 11v4Z" />
              <path d="M31 9a7 7 0 0 1 0 13M35 26c5 2 8 6 8 12h-7" />
            </svg>
          </div>
          <span>03</span>
        </div>
        <h3>Our Values</h3>
        <i />
        <p>
          Excellence, integrity, innovation, respect,
          responsibility and commitment to our students.
        </p>
      </article>
    </section>
  </main>

  {/* FOOTER */}
  <footer className="crane-about-footer">
    <div className="crane-about-footer-brand">
      <div className="crane-about-logo">✦</div>
      <div>
        <strong>CRANE COLLEGE</strong>
        <span>Learn · Grow · Achieve</span>
      </div>
    </div>

    <div className="crane-about-footer-social">
      <strong>Follow Us</strong>
      <p>f&nbsp;&nbsp; ◎ &nbsp; in &nbsp; ▶</p>
    </div>

    <p className="crane-about-copyright">
      © 2026 Crane College. All rights reserved.
    </p>
  </footer>
</div>


);
}

export default About;
