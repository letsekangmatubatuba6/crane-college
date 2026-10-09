import React from "react";

function About() {
  return (
    <div>

      <section className="page-hero">
        <div>
          <p className="welcome">ABOUT CRANE COLLEGE</p>

          <h1>Education. Innovation. Excellence.</h1>

          <p>
            Discover who we are, what we stand for and our vision
            for the future.
          </p>
        </div>
      </section>


      <section className="about-page">

        <div className="page-container">

          <div className="about-introduction">

            <div>
              <p className="section-label">
                WHO WE ARE
              </p>

              <h2>
                Preparing students for a changing world.
              </h2>
            </div>

            <div>
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

          </div>


          <div className="mission-grid">

            <div className="mission-card">

              <div className="mission-number">
                01
              </div>

              <h3>Our Vision</h3>

              <p>
                To become a respected institution recognised for
                quality education, innovation and positive impact
                on society.
              </p>

            </div>


            <div className="mission-card">

              <div className="mission-number">
                02
              </div>

              <h3>Our Mission</h3>

              <p>
                To provide accessible, practical and high-quality
                education that prepares students for meaningful
                careers and responsible citizenship.
              </p>

            </div>


            <div className="mission-card">

              <div className="mission-number">
                03
              </div>

              <h3>Our Values</h3>

              <p>
                Excellence, integrity, innovation, respect,
                responsibility and commitment to our students.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;