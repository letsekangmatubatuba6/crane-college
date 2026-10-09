import React from "react";

function Research() {
  return (
    <div>

      <section className="page-hero">
        <div>

          <p className="welcome">
            RESEARCH & INNOVATION
          </p>

          <h1>
            Creating Knowledge.
          </h1>

          <p>
            Research and innovation that address real-world challenges.
          </p>

        </div>
      </section>


      <section className="research-page">

        <div className="page-container">

          <div className="research-intro">

            <p className="section-label">
              OUR RESEARCH
            </p>

            <h2>
              Innovation for a better future.
            </h2>

            <p>
              Crane College encourages students and academics to
              participate in research that can contribute to
              communities and industry.
            </p>

          </div>


          <div className="research-grid">

            <div>
              <span>01</span>
              <h3>Technology</h3>
              <p>
                Software development, cybersecurity, artificial
                intelligence and digital transformation.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Business</h3>
              <p>
                Entrepreneurship, management and economic development.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Education</h3>
              <p>
                Research into teaching, learning and educational
                development.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Research;