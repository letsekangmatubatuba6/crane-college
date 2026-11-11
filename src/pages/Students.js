
import React from "react";
import { Link } from "react-router-dom";


function Students() {
  const studentServices = [
    {
      icon: "🎓",
      title: "Student Portal",
      description:
        "Access academic information, registration, results and important student services.",
      link: "/e-learning",
      button: "Open Student Portal",
    },
    {
      icon: "📚",
      title: "Library",
      description:
        "Explore books, research materials, study guides and digital learning resources.",
      link: "/students",
      button: "Explore Resources",
    },
    {
      icon: "🏆",
      title: "Sports & Activities",
      description:
        "Discover sports, student clubs, campus events and opportunities to develop your talents.",
      link: "/students",
      button: "Discover Activities",
    },
    {
      icon: "🤝",
      title: "Student Support",
      description:
        "Find guidance and support for academic matters, student welfare and campus life.",
      link: "/contact",
      button: "Get Support",
    },
  ];

  return (
    <div className="students-page">
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
          <Link to="/about">About</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="students-hero">
        <div className="students-hero-content">
          <span className="students-eyebrow">
            YOUR CAMPUS. YOUR COMMUNITY. YOUR FUTURE.
          </span>

          <h1>
            Life at <span>Crane College.</span>
          </h1>

          <p>
            Your college journey is about more than the classroom.
            Discover opportunities, build friendships, develop your
            talents and prepare for your future.
          </p>

          <div className="students-hero-buttons">
            <Link to="/e-learning" className="students-btn students-btn-gold">
              Student Portal <span>→</span>
            </Link>

            <Link to="/contact" className="students-btn students-btn-outline">
              Contact Student Support
            </Link>
          </div>

          <div className="students-hero-note">
            <span className="students-note-icon">✦</span>
            Learn today. Lead tomorrow.
          </div>
        </div>

        <div className="students-hero-art">
          <div className="students-art-circle"></div>

          <div className="students-art-card students-art-card-top">
            <span>📖</span>
            <div>
              <strong>Keep Learning</strong>
              <small>Every day is an opportunity</small>
            </div>
          </div>

          <div className="students-art-card students-art-card-bottom">
            <span>🌟</span>
            <div>
              <strong>Build Your Future</strong>
              <small>Your potential starts here</small>
            </div>
          </div>

          <div className="students-art-center">
            <div className="students-art-cap">🎓</div>
            <span>CRANE</span>
            <strong>COLLEGE</strong>
            <small>KNOWLEDGE · GROWTH · EXCELLENCE</small>
          </div>
        </div>
      </section>

      <section className="students-services">
        <div className="students-section-heading">
          <span className="students-section-label">STUDENT SERVICES</span>
          <h2>Everything you need to thrive.</h2>
          <p>
            Explore the resources and services designed to support
            your academic journey and campus experience.
          </p>
        </div>

        <div className="students-grid">
          {studentServices.map((service, index) => (
            <article className="students-card" key={service.title}>
              <div className="students-card-top">
                <div className="students-card-icon">{service.icon}</div>
                <span className="students-card-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link to={service.link} className="students-card-link">
                {service.button} <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="students-cta">
        <div>
          <span className="students-section-label">WE ARE HERE FOR YOU</span>
          <h2>Your journey matters.</h2>
          <p>
            Have a question or need help? Get in touch with the
            Crane College team.
          </p>
        </div>

        <Link to="/contact" className="students-btn students-btn-gold">
          Contact Us <span>→</span>
        </Link>
      </section>
    </div>
  );
}

export default Students;
