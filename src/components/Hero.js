import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-label">
          WELCOME TO CRANE COLLEGE
        </p>

        <h1>
          Education That
          <br />
          <span>Creates the Future.</span>
        </h1>

        <p className="hero-description">
          Discover a learning environment where knowledge,
          innovation and personal development come together
          to prepare students for a changing world.
        </p>

        <div className="hero-buttons">

          <Link to="/programmes" className="primary-button">
            Explore Programmes
            <ArrowRight size={20} />
          </Link>

          <Link to="/about" className="secondary-button">
            <Play size={18} />
            Discover Crane College
          </Link>

        </div>

      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;