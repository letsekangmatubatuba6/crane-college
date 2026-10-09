import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* TOP UTILITY BAR */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-left">
            <span>CRANE COLLEGE</span>
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


      {/* MAIN NAVIGATION */}
      <header className="main-header">

        <div className="header-container">

          <Link to="/" className="college-logo">
            <div className="logo-mark">
              CC
            </div>

            <div className="logo-text">
              <strong>CRANE</strong>
              <span>COLLEGE</span>
            </div>
          </Link>


          <nav className="main-nav">

            <Link to="/about">
              About
            </Link>

            <Link to="/programmes">
              Study
            </Link>

            <Link to="/research">
              Research
            </Link>

            <Link to="/students">
              Students
            </Link>

            <Link to="/news">
              News
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </nav>


          <Link
            to="/admissions"
            className="apply-button"
          >
            APPLY NOW
          </Link>

        </div>

      </header>


      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-image"></div>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-line"></div>

          <p className="hero-small">
            WELCOME TO CRANE COLLEGE
          </p>

          <h1>
            Shape Your Future.
            <br />
            Build Your Career.
          </h1>

          <p className="hero-description">
            A modern institution focused on quality education,
            innovation, research and preparing students for the future.
          </p>

          <div className="hero-buttons">

            <Link
              to="/admissions"
              className="hero-primary-button"
            >
              APPLY TO CRANE
            </Link>

            <Link
              to="/programmes"
              className="hero-secondary-button"
            >
              EXPLORE PROGRAMMES
            </Link>

          </div>

        </div>


        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="welcome-section">

        <div className="content-container">

          <div className="welcome-grid">

            <div className="welcome-heading">

              <p className="section-label">
                ABOUT CRANE COLLEGE
              </p>

              <h2>
                Education that prepares you
                <br />
                for the real world.
              </h2>

            </div>


            <div className="welcome-text">

              <p>
                Crane College is a modern higher education
                institution committed to developing students
                through quality teaching, practical learning
                and research.
              </p>

              <p>
                Our goal is to create graduates who have the
                knowledge, skills and confidence to contribute
                to their communities and succeed in their careers.
              </p>

              <Link
                to="/about"
                className="read-more"
              >
                DISCOVER CRANE COLLEGE
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* STATISTICS */}
      <section className="statistics-section">

        <div className="statistics-container">

          <div className="stat-item">
            <strong>10,000+</strong>
            <span>Students</span>
          </div>

          <div className="stat-item">
            <strong>50+</strong>
            <span>Programmes</span>
          </div>

          <div className="stat-item">
            <strong>95%</strong>
            <span>Student Success</span>
          </div>

          <div className="stat-item">
            <strong>20+</strong>
            <span>Years of Excellence</span>
          </div>

        </div>

      </section>


      {/* NEWS AND STORIES */}
      <section className="stories-section">

        <div className="content-container">

          <div className="section-top">

            <div>
              <p className="section-label">
                LATEST FROM CRANE
              </p>

              <h2>
                News & Stories
              </h2>
            </div>

            <Link
              to="/news"
              className="view-all"
            >
              VIEW ALL STORIES →
            </Link>

          </div>


          <div className="stories-grid">

            {/* STORY 1 */}
            <article className="story-card">

              <div className="story-image">

                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                  alt="Students at Crane College"
                />

                <span className="story-category">
                  STUDENTS
                </span>

              </div>

              <div className="story-body">

                <p className="story-date">
                  CRANE COLLEGE
                </p>

                <h3>
                  New student orientation programme announced
                </h3>

                <p>
                  Information and activities for new students
                  joining Crane College.
                </p>

                <Link to="/news">
                  READ MORE →
                </Link>

              </div>

            </article>


            {/* STORY 2 */}
            <article className="story-card">

              <div className="story-image">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Technology students"
                />

                <span className="story-category">
                  ACADEMICS
                </span>

              </div>

              <div className="story-body">

                <p className="story-date">
                  ACADEMIC NEWS
                </p>

                <h3>
                  Crane College expands technology programmes
                </h3>

                <p>
                  New learning opportunities are being
                  introduced for technology students.
                </p>

                <Link to="/news">
                  READ MORE →
                </Link>

              </div>

            </article>


            {/* STORY 3 */}
            <article className="story-card">

              <div className="story-image">

                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Research project"
                />

                <span className="story-category">
                  RESEARCH
                </span>

              </div>

              <div className="story-body">

                <p className="story-date">
                  RESEARCH & INNOVATION
                </p>

                <h3>
                  Students participate in new research projects
                </h3>

                <p>
                  Discover how students are contributing to
                  research and innovation.
                </p>

                <Link to="/news">
                  READ MORE →
                </Link>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* RESEARCH SECTION */}
      <section className="research-section">

        <div className="research-image">

          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c4f2c9?auto=format&fit=crop&w=1400&q=80"
            alt="Research and innovation"
          />

        </div>


        <div className="research-content">

          <p className="section-label">
            RESEARCH & INNOVATION
          </p>

          <h2>
            Creating knowledge.
            <br />
            Solving problems.
          </h2>

          <p>
            Crane College encourages students and academics
            to explore new ideas, develop innovative solutions
            and contribute to the development of society.
          </p>

          <Link
            to="/research"
            className="dark-link"
          >
            EXPLORE OUR RESEARCH
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* STUDY AT CRANE */}
      <section className="study-section">

        <div className="content-container">

          <div className="section-top">

            <div>

              <p className="section-label">
                STUDY AT CRANE
              </p>

              <h2>
                Find your path.
              </h2>

            </div>

            <Link
              to="/programmes"
              className="view-all"
            >
              VIEW ALL PROGRAMMES →
            </Link>

          </div>


          <div className="study-grid">

            <Link
              to="/programmes"
              className="study-card"
            >

              <span className="study-number">
                01
              </span>

              <h3>
                Programmes
              </h3>

              <p>
                Explore undergraduate and postgraduate
                programmes offered by Crane College.
              </p>

              <span className="card-arrow">
                →
              </span>

            </Link>


            <Link
              to="/admissions"
              className="study-card"
            >

              <span className="study-number">
                02
              </span>

              <h3>
                Admissions
              </h3>

              <p>
                Find out how to apply, admission requirements
                and important application information.
              </p>

              <span className="card-arrow">
                →
              </span>

            </Link>


            <Link
              to="/students"
              className="study-card"
            >

              <span className="study-number">
                03
              </span>

              <h3>
                Student Life
              </h3>

              <p>
                Discover student services, activities,
                support and life at Crane College.
              </p>

              <span className="card-arrow">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* EVENTS */}
      <section className="events-section">

        <div className="content-container">

          <div className="section-top">

            <div>

              <p className="section-label">
                WHAT'S HAPPENING
              </p>

              <h2>
                Upcoming Events
              </h2>

            </div>

            <Link
              to="/news"
              className="view-all"
            >
              VIEW ALL EVENTS →
            </Link>

          </div>


          <div className="event-list">

            <div className="event-item">

              <div className="event-date">
                <strong>15</strong>
                <span>OCT</span>
              </div>

              <div className="event-details">

                <span>
                  ACADEMIC EVENT
                </span>

                <h3>
                  New Student Orientation
                </h3>

                <p>
                  Crane College Main Campus
                </p>

              </div>

              <span className="event-arrow">
                →
              </span>

            </div>


            <div className="event-item">

              <div className="event-date">
                <strong>22</strong>
                <span>OCT</span>
              </div>

              <div className="event-details">

                <span>
                  RESEARCH
                </span>

                <h3>
                  Research & Innovation Seminar
                </h3>

                <p>
                  Crane College Main Campus
                </p>

              </div>

              <span className="event-arrow">
                →
              </span>

            </div>


            <div className="event-item">

              <div className="event-date">
                <strong>05</strong>
                <span>NOV</span>
              </div>

              <div className="event-details">

                <span>
                  STUDENTS
                </span>

                <h3>
                  Student Career Development Day
                </h3>

                <p>
                  Crane College Main Campus
                </p>

              </div>

              <span className="event-arrow">
                →
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* APPLICATION CTA */}
      <section className="application-section">

        <div className="application-content">

          <p className="section-label">
            BEGIN YOUR JOURNEY
          </p>

          <h2>
            Your future starts here.
          </h2>

          <p>
            Explore our programmes and take the first step
            towards your future career.
          </p>

          <Link
            to="/admissions"
            className="application-button"
          >
            APPLY TO CRANE COLLEGE →
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="footer-logo">
              CC
            </div>

            <h3>
              CRANE COLLEGE
            </h3>

            <p>
              Education. Innovation. Opportunity.
            </p>

          </div>


          <div className="footer-column">

            <h4>
              EXPLORE
            </h4>

            <Link to="/about">
              About
            </Link>

            <Link to="/programmes">
              Programmes
            </Link>

            <Link to="/research">
              Research
            </Link>

            <Link to="/news">
              News
            </Link>

          </div>


          <div className="footer-column">

            <h4>
              STUDENTS
            </h4>

            <Link to="/admissions">
              Admissions
            </Link>

            <Link to="/students">
              Student Life
            </Link>

            <Link to="/students">
              Student Services
            </Link>

          </div>


          <div className="footer-column">

            <h4>
              CONTACT
            </h4>

            <Link to="/contact">
              Contact Us
            </Link>

            <Link to="/contact">
              Campus
            </Link>

            <Link to="/contact">
              Get Directions
            </Link>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Crane College. All rights reserved.
          </p>

          <div>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Accessibility</span>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;