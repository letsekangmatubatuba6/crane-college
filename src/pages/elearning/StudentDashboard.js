import React from "react";
import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="student-dashboard">

      {/* =========================
          SIDEBAR
      ========================== */}

      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-mark">
            CC
          </div>

          <div>
            <strong>CRANE</strong>
            <span>COLLEGE</span>
          </div>
        </div>


        <div className="student-profile-small">

          <div className="student-avatar">
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

        </div>


        <nav className="dashboard-menu">

          <Link to="/e-learning/dashboard" className="dashboard-menu-item active">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/e-learning/courses" className="dashboard-menu-item">
            <span>▣</span>
            My Courses
          </Link>

          <Link to="/e-learning/calendar" className="dashboard-menu-item">
            <span>◫</span>
            Calendar
          </Link>

          <Link to="/e-learning/assignments" className="dashboard-menu-item">
            <span>□</span>
            Assignments
          </Link>

          <Link to="/e-learning/quizzes" className="dashboard-menu-item">
            <span>✓</span>
            Quizzes
          </Link>

          <Link to="/e-learning/grades" className="dashboard-menu-item">
            <span>▤</span>
            Grades
          </Link>

          <Link to="/e-learning/messages" className="dashboard-menu-item">
            <span>✉</span>
            Messages
            <span className="notification-number">3</span>
          </Link>

          <Link to="/e-learning/profile" className="dashboard-menu-item">
            <span>○</span>
            My Profile
          </Link>

        </nav>


        <div className="dashboard-sidebar-bottom">

          <Link to="/contact" className="dashboard-menu-item">
            <span>?</span>
            Student Support
          </Link>

          <Link to="/" className="dashboard-menu-item logout-item">
            <span>↪</span>
            Exit E-Learning
          </Link>

        </div>

      </aside>


      {/* =========================
          MAIN CONTENT
      ========================== */}

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


        {/* CONTENT */}

        <div className="dashboard-content">


          {/* WELCOME */}

          <section className="dashboard-welcome">

            <div>

              <p className="dashboard-label">
                STUDENT DASHBOARD
              </p>

              <h1>
                Good morning, Letsekang.
              </h1>

              <p>
                Welcome back to Crane College E-Learning.
                Here is an overview of your learning activities.
              </p>

            </div>

            <div className="welcome-date">

              <span>ACADEMIC YEAR</span>

              <strong>
                2026
              </strong>

            </div>

          </section>


          {/* QUICK STATISTICS */}

          <section className="dashboard-stats">

            <div className="dashboard-stat-card">

              <div className="stat-card-icon">
                📚
              </div>

              <div>
                <span>MY COURSES</span>
                <strong>4</strong>
              </div>

            </div>


            <div className="dashboard-stat-card">

              <div className="stat-card-icon">
                📝
              </div>

              <div>
                <span>ASSIGNMENTS</span>
                <strong>3</strong>
              </div>

            </div>


            <div className="dashboard-stat-card">

              <div className="stat-card-icon">
                ✓
              </div>

              <div>
                <span>QUIZZES</span>
                <strong>2</strong>
              </div>

            </div>


            <div className="dashboard-stat-card">

              <div className="stat-card-icon">
                📊
              </div>

              <div>
                <span>AVERAGE GRADE</span>
                <strong>78%</strong>
              </div>

            </div>

          </section>


          {/* COURSES */}

          <section className="dashboard-section">

            <div className="dashboard-section-heading">

              <div>

                <p className="dashboard-label">
                  LEARNING
                </p>

                <h2>
                  My Courses
                </h2>

              </div>

              <Link to="/e-learning/courses">
                View all courses →
              </Link>

            </div>


            <div className="dashboard-courses-grid">


              {/* COURSE 1 */}

              <Link
                to="/e-learning/course/software-engineering"
                className="dashboard-course-card"
              >

                <div className="course-card-top software-course">
                  <span>SE</span>
                </div>

                <div className="course-card-body">

                  <span className="course-code">
                    SE101
                  </span>

                  <h3>
                    Software Engineering
                  </h3>

                  <p>
                    Introduction to software development,
                    engineering principles and methodologies.
                  </p>

                  <div className="course-progress">

                    <div className="progress-info">
                      <span>Progress</span>
                      <strong>72%</strong>
                    </div>

                    <div className="progress-bar">
                      <div style={{ width: "72%" }}></div>
                    </div>

                  </div>

                </div>

              </Link>


              {/* COURSE 2 */}

              <Link
                to="/e-learning/course/database-systems"
                className="dashboard-course-card"
              >

                <div className="course-card-top database-course">
                  <span>DB</span>
                </div>

                <div className="course-card-body">

                  <span className="course-code">
                    DB201
                  </span>

                  <h3>
                    Database Systems
                  </h3>

                  <p>
                    Database design, SQL, data management
                    and database administration.
                  </p>

                  <div className="course-progress">

                    <div className="progress-info">
                      <span>Progress</span>
                      <strong>85%</strong>
                    </div>

                    <div className="progress-bar">
                      <div style={{ width: "85%" }}></div>
                    </div>

                  </div>

                </div>

              </Link>


              {/* COURSE 3 */}

              <Link
                to="/e-learning/course/computer-networks"
                className="dashboard-course-card"
              >

                <div className="course-card-top network-course">
                  <span>CN</span>
                </div>

                <div className="course-card-body">

                  <span className="course-code">
                    CN202
                  </span>

                  <h3>
                    Computer Networks
                  </h3>

                  <p>
                    Networking concepts, protocols,
                    infrastructure and security.
                  </p>

                  <div className="course-progress">

                    <div className="progress-info">
                      <span>Progress</span>
                      <strong>54%</strong>
                    </div>

                    <div className="progress-bar">
                      <div style={{ width: "54%" }}></div>
                    </div>

                  </div>

                </div>

              </Link>

            </div>

          </section>


          {/* LOWER GRID */}

          <div className="dashboard-lower-grid">


            {/* UPCOMING */}

            <section className="dashboard-panel">

              <div className="panel-heading">

                <div>
                  <p className="dashboard-label">
                    DEADLINES
                  </p>

                  <h2>
                    Upcoming
                  </h2>
                </div>

                <Link to="/e-learning/assignments">
                  View all
                </Link>

              </div>


              <div className="upcoming-list">


                <div className="upcoming-item">

                  <div className="upcoming-date">
                    <strong>15</strong>
                    <span>OCT</span>
                  </div>

                  <div className="upcoming-info">

                    <span>
                      ASSIGNMENT
                    </span>

                    <h3>
                      Software Engineering Assignment 1
                    </h3>

                    <p>
                      SE101
                    </p>

                  </div>

                  <span className="upcoming-arrow">
                    →
                  </span>

                </div>


                <div className="upcoming-item">

                  <div className="upcoming-date">
                    <strong>18</strong>
                    <span>OCT</span>
                  </div>

                  <div className="upcoming-info">

                    <span>
                      QUIZ
                    </span>

                    <h3>
                      Database Systems Quiz 2
                    </h3>

                    <p>
                      DB201
                    </p>

                  </div>

                  <span className="upcoming-arrow">
                    →
                  </span>

                </div>


                <div className="upcoming-item">

                  <div className="upcoming-date">
                    <strong>22</strong>
                    <span>OCT</span>
                  </div>

                  <div className="upcoming-info">

                    <span>
                      ASSIGNMENT
                    </span>

                    <h3>
                      Computer Networks Assignment
                    </h3>

                    <p>
                      CN202
                    </p>

                  </div>

                  <span className="upcoming-arrow">
                    →
                  </span>

                </div>

              </div>

            </section>


            {/* RECENT ACTIVITY */}

            <section className="dashboard-panel">

              <div className="panel-heading">

                <div>

                  <p className="dashboard-label">
                    ACTIVITY
                  </p>

                  <h2>
                    Recent Activity
                  </h2>

                </div>

              </div>


              <div className="activity-list">


                <div className="activity-item">

                  <div className="activity-icon">
                    ✓
                  </div>

                  <div>

                    <strong>
                      Assignment submitted
                    </strong>

                    <p>
                      Software Engineering Assignment 1
                    </p>

                    <span>
                      2 hours ago
                    </span>

                  </div>

                </div>


                <div className="activity-item">

                  <div className="activity-icon">
                    +
                  </div>

                  <div>

                    <strong>
                      New course material
                    </strong>

                    <p>
                      Database Systems — Chapter 4
                    </p>

                    <span>
                      Yesterday
                    </span>

                  </div>

                </div>


                <div className="activity-item">

                  <div className="activity-icon">
                    ✓
                  </div>

                  <div>

                    <strong>
                      Quiz completed
                    </strong>

                    <p>
                      Computer Networks Quiz 1
                    </p>

                    <span>
                      2 days ago
                    </span>

                  </div>

                </div>


              </div>

            </section>

          </div>


          {/* ANNOUNCEMENT */}

          <section className="dashboard-announcement">

            <div className="announcement-icon">
              !
            </div>

            <div>

              <span>
                CRANE COLLEGE ANNOUNCEMENT
              </span>

              <h3>
                Welcome to the new Crane College E-Learning platform
              </h3>

              <p>
                Check your courses regularly for new learning
                materials, assignments and announcements from your lecturers.
              </p>

            </div>

            <button>
              Read more →
            </button>

          </section>


        </div>

      </main>

    </div>
  );
}

export default StudentDashboard;