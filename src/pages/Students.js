import React from "react";

function Students() {
  return (
    <div>

      <section className="page-hero">
        <div>

          <p className="welcome">
            STUDENT LIFE
          </p>

          <h1>
            Life at Crane College.
          </h1>

          <p>
            Learn, connect, participate and grow beyond the classroom.
          </p>

        </div>
      </section>


      <section className="student-page">

        <div className="page-container">

          <div className="student-grid">

            <div className="student-card">
              <div>🎓</div>
              <h3>Student Portal</h3>
              <p>
                Access academic information, registration and
                student services.
              </p>
            </div>

            <div className="student-card">
              <div>📚</div>
              <h3>Library</h3>
              <p>
                Access books, research materials and digital
                learning resources.
              </p>
            </div>

            <div className="student-card">
              <div>🏆</div>
              <h3>Sports & Activities</h3>
              <p>
                Participate in sports, clubs and student activities.
              </p>
            </div>

            <div className="student-card">
              <div>🤝</div>
              <h3>Student Support</h3>
              <p>
                Get assistance with academic and student matters.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Students;