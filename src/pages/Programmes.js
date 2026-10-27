
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Programmes() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const programmes = [
    {
      title: "Bachelor of Software Engineering",
      description:
        "Learn programming, software development, databases and modern computing technologies.",
      category: "Computing",
      duration: "4 Years",
      code: "SE",
    },
    {
      title: "Bachelor of Information Systems",
      description:
        "Study technology, business systems, databases and information management.",
      category: "Computing",
      duration: "4 Years",
      code: "IS",
    },
    {
      title: "Bachelor of Business Administration",
      description:
        "Develop knowledge in business management, leadership and entrepreneurship.",
      category: "Business",
      duration: "4 Years",
      code: "BA",
    },
    {
      title: "Bachelor of Accounting",
      description:
        "Build knowledge in accounting, finance and financial management.",
      category: "Business",
      duration: "4 Years",
      code: "AC",
    },
    {
      title: "Bachelor of Education",
      description:
        "Prepare for a professional career in teaching and education.",
      category: "Education",
      duration: "4 Years",
      code: "ED",
    },
    {
      title: "Bachelor of Social Sciences",
      description:
        "Explore society, human behaviour and social development.",
      category: "Social Sciences",
      duration: "4 Years",
      code: "SS",
    },
  ];

  const categories = [
    "All",
    "Computing",
    "Business",
    "Education",
    "Social Sciences",
  ];

  const filteredProgrammes =
    selectedCategory === "All"
      ? programmes
      : programmes.filter(
          (programme) => programme.category === selectedCategory
        );

  return (
    <div className="crane-programmes-page">
      <header className="crane-about-header">
        <Link to="/" className="crane-about-brand">
          <span className="crane-about-logo">✦</span>
          <strong>CRANE COLLEGE</strong>
        </Link>

        <nav className="crane-about-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programmes" className="active">
            Programmes
          </Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/students">Students</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <section className="crane-programmes-hero">
          <div className="crane-programmes-hero-content">
            <span className="crane-programmes-eyebrow">
              LEARN • GROW • ACHIEVE
            </span>

            <h1>
              Find your <span>future.</span>
            </h1>

            <p>
              Discover learning opportunities designed to build your
              knowledge, develop practical skills and prepare you for
              your future career.
            </p>

            <Link
              to="/admissions"
              className="crane-programmes-hero-button"
            >
              Explore Admissions <span>→</span>
            </Link>
          </div>

          <div className="crane-programmes-hero-art" aria-hidden="true">
            <div className="crane-programmes-art-circle">
              <span className="crane-programmes-art-star">✦</span>
              <div className="crane-programmes-art-book">
                <span>CC</span>
                <small>YOUR FUTURE STARTS HERE</small>
              </div>
            </div>
            <div className="crane-programmes-art-note">
              <strong>Dream big.</strong>
              <span>Learn without limits.</span>
            </div>
          </div>
        </section>

        <section className="crane-programmes-section">
          <div className="crane-programmes-heading">
            <div>
              <span className="crane-programmes-eyebrow">
                EXPLORE YOUR OPTIONS
              </span>
              <h2>Our Programmes</h2>
              <p>
                Find a programme that matches your interests and ambitions.
              </p>
            </div>

            <span className="crane-programmes-count">
              {filteredProgrammes.length}{" "}
              {filteredProgrammes.length === 1 ? "programme" : "programmes"}
            </span>
          </div>

          <div className="crane-programmes-filters" aria-label="Filter programmes">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? "crane-programmes-filter selected"
                    : "crane-programmes-filter"
                }
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="crane-programmes-grid">
            {filteredProgrammes.map((programme) => (
              <article
                className="crane-programme-card"
                key={programme.title}
              >
                <div className="crane-programme-card-top">
                  <div className="crane-programme-symbol">
                    {programme.code}
                  </div>
                  <span className="crane-programme-category">
                    {programme.category}
                  </span>
                </div>

                <h3>{programme.title}</h3>

                <p className="crane-programme-description">
                  {programme.description}
                </p>

                <div className="crane-programme-card-footer">
                  <span>
                    <span className="crane-programme-footer-label">
                      Duration
                    </span>
                    <strong>{programme.duration}</strong>
                  </span>

                  <Link
                    to="/admissions"
                    className="crane-programme-learn-more"
                    aria-label={`Learn about admissions for ${programme.title}`}
                  >
                    Learn more <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="crane-programmes-note">
            <span className="crane-programmes-note-icon">i</span>
            <p>
              <strong>Please note:</strong> These programme listings are
              examples for the website design. Confirm the actual programmes,
              entry requirements and durations offered by Crane College
              before publishing.
            </p>
          </div>
        </section>

        <section className="crane-programmes-cta">
          <div>
            <span>READY TO TAKE THE NEXT STEP?</span>
            <h2>Your journey starts here.</h2>
            <p>Visit admissions to learn about the next steps.</p>
          </div>
          <Link to="/admissions" className="crane-programmes-cta-button">
            View Admissions <span>→</span>
          </Link>
        </section>
      </main>

      <footer className="crane-programmes-footer">
        <span>✦ CRANE COLLEGE</span>
        <p>Learning today. Leading tomorrow.</p>
      </footer>
    </div>
  );
}

export default Programmes;
