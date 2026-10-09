import React from "react";
import { Link } from "react-router-dom";

function SoftwareEngineering() {
  return (
    <div className="student-dashboard">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-mark">CC</div>

          <div>
            <strong>CRANE</strong>
            <span>COLLEGE</span>
          </div>
        </div>

        <div className="student-profile-small">
          <div className="student-avatar">LM</div>

          <div>
            <strong>
            {localStorage.getItem("studentEmail") || "Student"}
            </strong>
            <span>
             Signed in
            </span>
          </div>
        </div>

        <nav className="dashboard-menu">

          <Link
            to="/e-learning/dashboard"
            className="dashboard-menu-item"
          >
            <span>⌂</span>
            Dashboard
          </Link>

          <Link
            to="/e-learning/courses"
            className="dashboard-menu-item active"
          >
            <span>▣</span>
            My Courses
          </Link>

          <Link
            to="/e-learning/calendar"
            className="dashboard-menu-item"
          >
            <span>◫</span>
            Calendar
          </Link>

          <Link
            to="/e-learning/assignments"
            className="dashboard-menu-item"
          >
            <span>□</span>
            Assignments
          </Link>

          <Link
            to="/e-learning/quizzes"
            className="dashboard-menu-item"
          >
            <span>✓</span>
            Quizzes
          </Link>

          <Link
            to="/e-learning/grades"
            className="dashboard-menu-item"
          >
            <span>▤</span>
            Grades
          </Link>

          <Link
            to="/e-learning/messages"
            className="dashboard-menu-item"
          >
            <span>✉</span>
            Messages
            <span className="notification-number">3</span>
          </Link>

          <Link
            to="/e-learning/profile"
            className="dashboard-menu-item"
          >
            <span>○</span>
            My Profile
          </Link>

        </nav>

        <div className="dashboard-sidebar-bottom">

          <Link
            to="/contact"
            className="dashboard-menu-item"
          >
            <span>?</span>
            Student Support
          </Link>

          <Link
            to="/"
            className="dashboard-menu-item logout-item"
          >
            <span>↪</span>
            Exit E-Learning
          </Link>

        </div>

      </aside>

      {/* MAIN */}
      <main className="dashboard-main">

        {/* TOP BAR */}
        <header className="dashboard-topbar">

          <div className="dashboard-mobile-title">
            CRANE COLLEGE
          </div>

          <div className="dashboard-topbar-right">

            <button className="dashboard-icon-button">
              🔔
              <span className="notification-dot"></span>
            </button>

            <div className="dashboard-user">

              <div className="dashboard-user-avatar">
                LM
              </div>

              <div>
                <strong>
                {localStorage.getItem("studentEmail") || "Student"}
                </strong>

            <span>
            Signed in
            </span>
              </div>

              <span className="user-arrow">
                ▼
              </span>

            </div>

          </div>

        </header>

        {/* COURSE CONTENT */}
        <div className="dashboard-content">

          {/* BACK LINK */}
          <Link
            to="/e-learning/courses"
            className="course-back-link"
          >
            ← Back to My Courses
          </Link>

          {/* COURSE HEADER */}
          <section className="individual-course-header">

            <div>

              <p className="dashboard-label">
                SE101 • 2026 ACADEMIC YEAR
              </p>

              <h1>
                Software Engineering
              </h1>

              <p>
                Learn the principles, methods and practices
                used to design, develop, test and maintain
                software systems.
              </p>

            </div>

            <div className="individual-course-code">
              SE101
            </div>

          </section>

          {/* COURSE NAVIGATION */}
          <div className="course-tabs">

            <a href="#overview" className="course-tab active">
              Overview
            </a>

            <a href="#materials" className="course-tab">
              Materials
            </a>

            <a href="#assignments" className="course-tab">
              Assignments
            </a>

            <a href="#quizzes" className="course-tab">
              Quizzes
            </a>

            <a href="#grades" className="course-tab">
              Grades
            </a>

          </div>

          {/* OVERVIEW */}
          <section
            id="overview"
            className="individual-course-section"
          >

            <div className="course-section-heading">

              <div>
                <p className="dashboard-label">
                  COURSE OVERVIEW
                </p>

                <h2>
                  Welcome to Software Engineering
                </h2>
              </div>

            </div>

            <div className="course-overview-grid">

              <div className="course-overview-text">

                <p>
                  Welcome to SE101 Software Engineering.
                  This course introduces students to the
                  main concepts used in professional software
                  development.
                </p>

                <p>
                  You will learn how software projects are
                  planned, designed, developed, tested,
                  deployed and maintained.
                </p>

                <p>
                  Throughout the course, you will work with
                  software development methods, requirements,
                  system design, testing and project management.
                </p>

              </div>

              <div className="course-information-card">

                <h3>
                  Course Information
                </h3>

                <div>
                  <span>COURSE CODE</span>
                  <strong>SE101</strong>
                </div>

                <div>
                  <span>LECTURER</span>
                  <strong>Dr. M. Mokoena</strong>
                </div>

                <div>
                  <span>CREDITS</span>
                  <strong>12 Credits</strong>
                </div>

                <div>
                  <span>SEMESTER</span>
                  <strong>Semester 1</strong>
                </div>

              </div>

            </div>

          </section>

          {/* MATERIALS */}
          <section
            id="materials"
            className="individual-course-section"
          >

            <div className="course-section-heading">

              <div>
                <p className="dashboard-label">
                  LEARNING MATERIALS
                </p>

                <h2>
                  Course Materials
                </h2>
              </div>

              <span>
                5 Materials
              </span>

            </div>

            <div className="course-material-list">

              <div className="course-material-item">

                <div className="material-icon">
                  📄
                </div>

                <div className="material-info">

                  <strong>
                    Introduction to Software Engineering
                  </strong>

                  <span>
                    Lecture Notes • PDF
                  </span>

                </div>

                <button>
                  View
                </button>

              </div>

              <div className="course-material-item">

                <div className="material-icon">
                  📄
                </div>

                <div className="material-info">

                  <strong>
                    Software Development Life Cycle
                  </strong>

                  <span>
                    Lecture Notes • PDF
                  </span>

                </div>

                <button>
                  View
                </button>

              </div>

              <div className="course-material-item">

                <div className="material-icon">
                  📊
                </div>

                <div className="material-info">

                  <strong>
                    Software Requirements
                  </strong>

                  <span>
                    Presentation • PPT
                  </span>

                </div>

                <button>
                  View
                </button>

              </div>

              <div className="course-material-item">

                <div className="material-icon">
                  📄
                </div>

                <div className="material-info">

                  <strong>
                    System Design Principles
                  </strong>

                  <span>
                    Lecture Notes • PDF
                  </span>

                </div>

                <button>
                  View
                </button>

              </div>

              <div className="course-material-item">

                <div className="material-icon">
                  🎥
                </div>

                <div className="material-info">

                  <strong>
                    Software Testing Introduction
                  </strong>

                  <span>
                    Video Lecture
                  </span>

                </div>

                <button>
                  Watch
                </button>

              </div>

            </div>

          </section>

          {/* ASSIGNMENTS */}
          <section
            id="assignments"
            className="individual-course-section"
          >

            <div className="course-section-heading">

              <div>
                <p className="dashboard-label">
                  ASSESSMENTS
                </p>

                <h2>
                  Assignments
                </h2>
              </div>

            </div>

            <div className="course-assignment-list">

              <div className="course-assignment-item">

                <div className="assignment-number">
                  01
                </div>

                <div>
                  <span>ASSIGNMENT</span>

                  <h3>
                    Introduction to Software Engineering
                  </h3>

                  <p>
                    Explain the importance of software
                    engineering in modern software development.
                  </p>

                  <small>
                    Due: 15 October 2026
                  </small>
                </div>

                <strong className="assignment-pending">
                  Pending
                </strong>

              </div>

              <div className="course-assignment-item">

                <div className="assignment-number">
                  02
                </div>

                <div>
                  <span>ASSIGNMENT</span>

                  <h3>
                    Software Development Life Cycle
                  </h3>

                  <p>
                    Compare different software development
                    life cycle models.
                  </p>

                  <small>
                    Due: 30 October 2026
                  </small>
                </div>

                <strong className="assignment-pending">
                  Pending
                </strong>

              </div>

            </div>

          </section>

          {/* QUIZZES */}
          <section
            id="quizzes"
            className="individual-course-section"
          >

            <div className="course-section-heading">

              <div>
                <p className="dashboard-label">
                  ONLINE ASSESSMENTS
                </p>

                <h2>
                  Quizzes
                </h2>
              </div>

            </div>

            <div className="course-quiz-card">

              <div>

                <span>
                  QUIZ 01
                </span>

                <h3>
                  Introduction to Software Engineering
                </h3>

                <p>
                  10 questions • 20 minutes
                </p>

              </div>

              <button>
                Start Quiz →
              </button>

            </div>

          </section>

          {/* GRADES */}
          <section
            id="grades"
            className="individual-course-section"
          >

            <div className="course-section-heading">

              <div>
                <p className="dashboard-label">
                  ACADEMIC PERFORMANCE
                </p>

                <h2>
                  Course Grade
                </h2>
              </div>

            </div>

            <div className="course-grade-card">

              <div>

                <span>
                  CURRENT COURSE AVERAGE
                </span>

                <strong>
                  78%
                </strong>

              </div>

              <div className="course-grade-progress">

                <div
                  style={{
                    width: "78%",
                  }}
                ></div>

              </div>

              <p>
                Your current average is based on completed
                assessments.
              </p>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default SoftwareEngineering;