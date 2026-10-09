import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      code: "SE101",
      title: "Software Engineering",
      description:
        "Introduction to software development, engineering principles, software processes and development methodologies.",
      lecturer: "Dr. M. Mokoena",
      progress: 72,
      status: "In Progress",
      link: "/e-learning/course/software-engineering",
    },
    {
      code: "DB201",
      title: "Database Systems",
      description:
        "Database design, SQL, data management, database administration and database security.",
      lecturer: "Mr. T. Khumalo",
      progress: 85,
      status: "In Progress",
      link: "/e-learning/course/database-systems",
    },
    {
      code: "CN202",
      title: "Computer Networks",
      description:
        "Networking concepts, communication protocols, network infrastructure and network security.",
      lecturer: "Ms. P. Molefe",
      progress: 54,
      status: "In Progress",
      link: "/e-learning/course/computer-networks",
    },
    {
      code: "WD203",
      title: "Web Development",
      description:
        "Learn modern web development, HTML, CSS, JavaScript and development of interactive websites.",
      lecturer: "Mr. K. Dlamini",
      progress: 63,
      status: "In Progress",
      link: "/e-learning/course/web-development",
    },
  ];

  return (
    <div className="student-dashboard">

      {/* Sidebar */}
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

            <span className="notification-number">
              3
            </span>
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

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Top bar */}
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

        {/* Page */}
        <div className="dashboard-content">

          <section className="courses-page-header">

            <div>

              <p className="dashboard-label">
                ACADEMIC YEAR 2026
              </p>

              <h1>
                My Courses
              </h1>

              <p>
                View and access all the courses you are
                currently registered for.
              </p>

            </div>

            <div className="courses-count-box">

              <strong>
                {courses.length}
              </strong>

              <span>
                Registered Courses
              </span>

            </div>

          </section>

          {/* Course Grid */}
          <section className="all-courses-grid">

            {courses.map((course) => (

              <div
                className="full-course-card"
                key={course.code}
              >

                <div className="full-course-top">

                  <div className="course-code-large">
                    {course.code}
                  </div>

                  <span className="course-status">
                    {course.status}
                  </span>

                </div>

                <div className="full-course-body">

                  <h2>
                    {course.title}
                  </h2>

                  <p>
                    {course.description}
                  </p>

                  <div className="course-lecturer">

                    <span>
                      LECTURER
                    </span>

                    <strong>
                      {course.lecturer}
                    </strong>

                  </div>

                  <div className="course-progress">

                    <div className="progress-info">

                      <span>
                        Course Progress
                      </span>

                      <strong>
                        {course.progress}%
                      </strong>

                    </div>

                    <div className="progress-bar">

                      <div
                        style={{
                          width: `${course.progress}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                  <Link
                    to={course.link}
                    className="open-course-button"
                  >
                    Open Course →
                  </Link>

                </div>

              </div>

            ))}

          </section>

        </div>

      </main>

    </div>
  );
}

export default Courses;