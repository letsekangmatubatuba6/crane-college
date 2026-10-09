import React from "react";

function Contact() {
  return (
    <div>

      <section className="page-hero">
        <div>

          <p className="welcome">
            CONTACT US
          </p>

          <h1>
            We'd Like to Hear From You.
          </h1>

          <p>
            Contact Crane College for more information.
          </p>

        </div>
      </section>


      <section className="contact-page">

        <div className="page-container">

          <div className="contact-grid">

            <div>

              <p className="section-label">
                GET IN TOUCH
              </p>

              <h2>
                Contact Crane College
              </h2>

              <div className="contact-detail">
                <strong>Address</strong>
                <p>Maseru, Lesotho</p>
              </div>

              <div className="contact-detail">
                <strong>Phone</strong>
                <p>+266 0000 0000</p>
              </div>

              <div className="contact-detail">
                <strong>Email</strong>
                <p>info@cranecollege.ac.ls</p>
              </div>

              <div className="contact-detail">
                <strong>Office Hours</strong>
                <p>
                  Monday – Friday<br />
                  08:00 – 16:30
                </p>
              </div>

            </div>


            <div className="contact-form">

              <h2>
                Send us a message
              </h2>

              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="6"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button className="application-submit">
                Send Message
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;