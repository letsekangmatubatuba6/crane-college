import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ELearningHome() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  return (
    <div className="elearning-home">

      {/* =========================
          TOP BAR
      ========================== */}

      <div className="elearning-topbar">

        <div className="elearning-topbar-inner">

          <div>
            Crane College E-Learning
          </div>

          <div className="elearning-top-links">
            <span>Student Support</span>
            <span>Help</span>
            <span>Contact</span>
          </div>

        </div>

      </div>


      {/* =========================
          NAVIGATION
      ========================== */}

      <nav className="elearning-navbar">

        <div className="elearning-nav-inner">

          <Link
            to="/e-learning"
            className="elearning-logo"
          >

            <div className="elearning-logo-mark">
              CC
            </div>

            <div>
              <strong>CRANE</strong>
              <span>COLLEGE</span>
            </div>

          </Link>


          <div className="elearning-nav-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About E-Learning
            </a>

            <a href="#courses">
              Courses
            </a>

            <a href="#resources">
              Resources
            </a>

            <a href="#support">
              Student Support
            </a>

          </div>


          <button
          className="elearning-login-button"
          onClick={() => setShowLogin(true)}
          >
          Login
          </button>
        </div>

      </nav>


      {/* =========================
          HERO
      ========================== */}

      <section
        id="home"
        className="elearning-hero"
      >

        <div className="elearning-hero-content">

          <div className="elearning-hero-text">

            <p className="elearning-eyebrow">
              CRANE COLLEGE DIGITAL LEARNING
            </p>

            <h1>
              Learn. Connect.
              <br />
              <span>Grow.</span>
            </h1>

            <p className="elearning-hero-description">

              Welcome to the Crane College E-Learning
              platform. Access your courses, learning
              materials, assignments, quizzes and academic
              information from anywhere.

            </p>


            <div className="elearning-hero-buttons">

              <button
              type="button"
              className="elearning-primary-button"
             onClick={() => setShowLogin(true)}
              >
            Login to E-Learning →
        </button>

              <a
                href="#about"
                className="elearning-secondary-button"
              >
                Explore the Platform
              </a>

            </div>

          </div>


          <div className="elearning-hero-card">

            <div className="hero-card-header">

              <span>
                CRANE COLLEGE
              </span>

              <strong>
                E-LEARNING
              </strong>

            </div>


            <div className="hero-dashboard-preview">

              <div className="preview-sidebar">

                <div className="preview-logo">
                  CC
                </div>

                <div className="preview-line active"></div>
                <div className="preview-line"></div>
                <div className="preview-line"></div>
                <div className="preview-line"></div>
                <div className="preview-line"></div>

              </div>


              <div className="preview-content">

                <div className="preview-title">
                  Welcome back
                </div>

                <div className="preview-boxes">

                  <div></div>
                  <div></div>
                  <div></div>

                </div>

                <div className="preview-large-box"></div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================== */}

      <section
        id="about"
        className="elearning-about"
      >

        <div className="elearning-container">

          <div className="section-introduction">

            <p className="elearning-section-label">
              ABOUT THE PLATFORM
            </p>

            <h2>
              A modern learning environment
            </h2>

            <p>
              Crane College E-Learning gives students and
              lecturers a central place to manage teaching
              and learning activities.
            </p>

          </div>


          <div className="elearning-about-grid">

            <div className="elearning-about-text">

              <p>
                Students can access their courses, download
                learning materials, submit assignments,
                complete quizzes and view their grades online.
              </p>

              <p>
                Lecturers can manage course materials,
                communicate with students, create assessments
                and monitor academic progress.
              </p>

              <p>
                The platform is designed to support learning
                both on campus and from anywhere with an
                internet connection.
              </p>

            </div>


            <div className="elearning-about-highlight">

              <span>
                LEARNING AT CRANE COLLEGE
              </span>

              <strong>
                One platform for your academic journey.
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FEATURES
      ========================== */}

      <section
        id="courses"
        className="elearning-features"
      >

        <div className="elearning-container">

          <div className="section-introduction">

            <p className="elearning-section-label">
              WHAT YOU CAN DO
            </p>

            <h2>
              Everything you need to learn
            </h2>

          </div>


          <div className="elearning-feature-grid">


            <div className="elearning-feature-card">

              <div className="feature-number">
                01
              </div>

              <h3>
                Access Your Courses
              </h3>

              <p>
                View all your registered courses and
                access your course information in one place.
              </p>

            </div>


            <div className="elearning-feature-card">

              <div className="feature-number">
                02
              </div>

              <h3>
                Learning Materials
              </h3>

              <p>
                Access lecture notes, presentations,
                documents, videos and other learning
                resources.
              </p>

            </div>


            <div className="elearning-feature-card">

              <div className="feature-number">
                03
              </div>

              <h3>
                Assignments
              </h3>

              <p>
                View assignment instructions, submit your
                work and keep track of upcoming deadlines.
              </p>

            </div>


            <div className="elearning-feature-card">

              <div className="feature-number">
                04
              </div>

              <h3>
                Online Quizzes
              </h3>

              <p>
                Complete online quizzes and assessments
                provided by your lecturers.
              </p>

            </div>


            <div className="elearning-feature-card">

              <div className="feature-number">
                05
              </div>

              <h3>
                View Your Grades
              </h3>

              <p>
                Monitor your assessment results and
                academic progress.
              </p>

            </div>


            <div className="elearning-feature-card">

              <div className="feature-number">
                06
              </div>

              <h3>
                Communicate
              </h3>

              <p>
                Receive announcements and communicate
                with lecturers and other academic staff.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          RESOURCES
      ========================== */}

      <section
        id="resources"
        className="elearning-resources"
      >

        <div className="elearning-container">

          <div className="resources-content">

            <div>

              <p className="elearning-section-label">
                LEARNING RESOURCES
              </p>

              <h2>
                Learning materials at your fingertips
              </h2>

              <p>
                Your lecturers can provide course materials
                through the platform so that you can access
                them whenever you need them.
              </p>

            </div>


            <div className="resources-list">

              <div>
                <strong>Lecture Notes</strong>
                <span>Course notes and documents</span>
              </div>

              <div>
                <strong>Presentations</strong>
                <span>Slides and visual learning materials</span>
              </div>

              <div>
                <strong>Videos</strong>
                <span>Recorded lessons and learning videos</span>
              </div>

              <div>
                <strong>Academic Activities</strong>
                <span>Assignments, quizzes and assessments</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          STUDENT SUPPORT
      ========================== */}

      <section
        id="support"
        className="elearning-support"
      >

        <div className="elearning-container">

          <div className="support-box">

            <div>

              <p className="elearning-section-label">
                NEED HELP?
              </p>

              <h2>
                Student E-Learning Support
              </h2>

              <p>
                If you experience problems accessing your
                courses or using the E-Learning platform,
                contact Crane College student support.
              </p>

            </div>


            <Link
              to="/contact"
              className="support-button"
            >
              Contact Support →
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          LOGIN CTA
      ========================== */}

      <section className="elearning-login-cta">

        <div className="elearning-container">

          <p className="elearning-section-label">
            CRANE COLLEGE E-LEARNING
          </p>

          <h2>
            Ready to continue your learning?
          </h2>

          <p>
            Login to access your courses, assignments,
            quizzes and academic information.
          </p>

          <Link
           // to="/e-learning/login"
           // className="elearning-primary-button"
          >
            
          </Link>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

      <footer className="elearning-footer">

        <div className="elearning-container">

          <div className="elearning-footer-grid">

            <div>

              <div className="elearning-footer-logo">
                <div className="elearning-logo-mark">
                  CC
                </div>

                <div>
                  <strong>CRANE</strong>
                  <span>COLLEGE</span>
                </div>
              </div>

              <p>
                Supporting learning through technology
                and innovation.
              </p>

            </div>


            <div>

              <h4>
                E-Learning
              </h4>

              <a href="#about">
                About
              </a>

              <a href="#courses">
                Courses
              </a>

              <a href="#resources">
                Resources
              </a>

              <a href="#support">
                Support
              </a>

            </div>


            <div>

              <h4>
                Account
              </h4>

              <Link to="/e-learning/login">
                Student Login
              </Link>

              <Link to="/e-learning/login">
                Lecturer Login
              </Link>

            </div>

          </div>


          <div className="elearning-footer-bottom">

            <span>
              © 2026 Crane College
            </span>

            <span>
              E-Learning Platform
            </span>

          </div>

        </div>

      </footer>
      
{showLogin && (
  <div
    className="login-modal-overlay"
    onClick={() => setShowLogin(false)}
  >
    <div
      className="login-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="login-modal-close"
        onClick={() => setShowLogin(false)}
        aria-label="Close login"
      >
        ×
      </button>

      <div className="login-modal-logo">CC</div>

      <h2>Crane College</h2>
      <h3>E-Learning Login</h3>

      <p>
        Sign in to access your courses and academic information.
      </p>

      {loginError && (
        <p
          role="alert"
          style={{ color: "#c53030", marginBottom: "12px" }}
        >
          {loginError}
        </p>
      )}

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const enteredEmail = email.trim().toLowerCase();
          const enteredPassword = password;

          if (
            enteredEmail === "student@cranecollege.edu" &&
            enteredPassword === "123456"
          ) {
            try {
              localStorage.setItem("studentEmail", enteredEmail);
              setLoginError("");
              setShowLogin(false);
              navigate("/e-learning/dashboard");
            } catch (error) {
              setLoginError("Unable to log in. Please try again.");
            }
          } else {
            setLoginError(
              "Incorrect email or password. Use the demo details below."
            );
          }
        }}
      >
        <label htmlFor="popup-student-email">
          Student Email
        </label>

        <input
          id="popup-student-email"
          type="email"
          placeholder="student@cranecollege.edu"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="username"
          required
        />

        <label htmlFor="popup-student-password">
          Password
        </label>

        <input
          id="popup-student-password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />

        <button
          type="submit"
          className="login-modal-button"
        >
          Login to E-Learning
        </button>
      </form>

      <div className="login-modal-demo">
        <strong>Demo Account</strong>
        <br />
        Email: student@cranecollege.edu
        <br />
        Password: 123456
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default ELearningHome;