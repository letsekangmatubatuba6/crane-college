
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <div className="crane-contact-page">
      <header className="crane-about-header">
        <Link to="/" className="crane-about-brand">
          <span className="crane-about-logo">✦</span>
          <strong>CRANE COLLEGE</strong>
        </Link>

        <nav className="crane-about-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/students">Students</Link>
          <Link to="/news">News</Link>
          <Link to="/contact" className="active">Contact</Link>
        </nav>
      </header>

      <section className="crane-contact-hero">
        <div className="crane-contact-hero-content">
          <span className="crane-contact-eyebrow">
            WE ARE HERE TO HELP
          </span>

          <h1>
            We'd love to
            <span> hear from you.</span>
          </h1>

          <p>
            Have questions about admissions, our programmes or student
            services? Get in touch with the Crane College team.
          </p>

          <a href="#contact-details" className="crane-contact-hero-button">
            Get in touch <span>↓</span>
          </a>
        </div>

        <div className="crane-contact-hero-art">
          <div className="crane-contact-art-circle"></div>
          <div className="crane-contact-art-icon">✉</div>

          <div className="crane-contact-art-card">
            <span>💬</span>
            <div>
              <strong>Let's talk</strong>
              <small>Your questions matter to us</small>
            </div>
          </div>
        </div>
      </section>

      <section className="crane-contact-content" id="contact-details">
        <div className="crane-contact-heading">
          <span className="crane-contact-section-label">
            CONTACT INFORMATION
          </span>

          <h2>Let's start a conversation.</h2>

          <p>
            Reach out to us using the contact details below, or send
            us a message through the form.
          </p>
        </div>

        <div className="crane-contact-grid">
          <div className="crane-contact-information">
            <div className="crane-contact-info-card">
              <div className="crane-contact-info-icon">📍</div>
              <div>
                <h3>Visit Our College</h3>
                <p>Maseru, Lesotho</p>
                <small>Contact us for directions and visiting arrangements.</small>
              </div>
            </div>

            <div className="crane-contact-info-card">
              <div className="crane-contact-info-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>+266 0000 0000</p>
                <small>Replace this placeholder with the college's official number.</small>
              </div>
            </div>

            <div className="crane-contact-info-card">
              <div className="crane-contact-info-icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p>info@cranecollege.ac.ls</p>
                <small>Replace this with the official monitored college email.</small>
              </div>
            </div>

            <div className="crane-contact-info-card">
              <div className="crane-contact-info-icon">🕒</div>
              <div>
                <h3>Office Hours</h3>
                <p>Monday – Friday</p>
                <small>08:00 – 16:30</small>
              </div>
            </div>

            <div className="crane-contact-help">
              <span>✦</span>
              <div>
                <strong>How can we help?</strong>
                <p>
                  Tell us what you need, and our team can direct your
                  enquiry to the appropriate department.
                </p>
              </div>
            </div>
          </div>

          <div className="crane-contact-form-card">
            <div className="crane-contact-form-heading">
              <span className="crane-contact-section-label">
                SEND AN ENQUIRY
              </span>
              <h2>Send us a message</h2>
              <p>
                Complete the form below with your details.
              </p>
            </div>

            {submitted && (
              <div className="crane-contact-notice" role="status">
                Your message has been prepared in this demo, but has not
                been sent. Connect a backend or email service to receive
                messages from this form.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="crane-contact-form-row">
                <div className="crane-contact-form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="crane-contact-form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="crane-contact-form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What is your enquiry about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="crane-contact-form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="crane-contact-submit"
              >
                Prepare Message <span>→</span>
              </button>

              <p className="crane-contact-privacy-note">
                Please do not include passwords or other sensitive
                personal information in your message.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="crane-contact-bottom">
        <div>
          <span className="crane-contact-section-label">
            YOUR FUTURE STARTS HERE
          </span>
          <h2>We look forward to hearing from you.</h2>
          <p>
            Let us help you take the next step in your educational journey.
          </p>
        </div>

        <Link to="/programmes" className="crane-contact-bottom-button">
          Explore Programmes <span>→</span>
        </Link>
      </section>
    </div>
  );
}

export default Contact;
