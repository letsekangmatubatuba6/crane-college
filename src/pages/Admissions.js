import React, { useState } from "react";

function Admissions() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>

      <section className="page-hero">
        <div>

          <p className="welcome">
            ADMISSIONS
          </p>

          <h1>
            Start Your Journey.
          </h1>

          <p>
            Take the first step towards your academic future.
          </p>

        </div>
      </section>


      <section className="admissions-page">

        <div className="page-container">

          <div className="admission-intro">

            <div>

              <p className="section-label">
                HOW TO APPLY
              </p>

              <h2>
                Your application starts here.
              </h2>

            </div>

            <p>
              Follow the steps below to begin your application
              to Crane College.
            </p>

          </div>


          <div className="application-steps">

            <div>
              <strong>01</strong>
              <h3>Choose a Programme</h3>
              <p>
                Select the programme that matches your career goals.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Prepare Documents</h3>
              <p>
                Prepare your identification and academic documents.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Complete Application</h3>
              <p>
                Fill in the application form below.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Application Review</h3>
              <p>
                Your application will be reviewed by admissions.
              </p>
            </div>

          </div>


          <div className="application-box">

            <div className="application-header">

              <p className="section-label">
                ONLINE APPLICATION
              </p>

              <h2>
                Apply to Crane College
              </h2>

            </div>


            {submitted ? (

              <div className="success-message">

                <h3>
                  Application Submitted
                </h3>

                <p>
                  Thank you for applying to Crane College.
                  Our admissions team will contact you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Application
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit}>

                <div className="form-row">

                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label>Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your last name"
                    />
                  </div>

                </div>


                <div className="form-row">

                  <div>
                    <label>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                </div>


                <div className="form-group">

                  <label>
                    Programme
                  </label>

                  <select required>

                    <option value="">
                      Select a programme
                    </option>

                    <option>
                      BSc Software Engineering
                    </option>

                    <option>
                      BSc Information Systems
                    </option>

                    <option>
                      Bachelor of Business Administration
                    </option>

                    <option>
                      Bachelor of Education
                    </option>

                    <option>
                      Bachelor of Engineering
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>
                    Highest Qualification
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="e.g. High School Certificate"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us anything else we should know"
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="application-submit"
                >
                  Submit Application
                </button>

              </form>

            )}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Admissions;