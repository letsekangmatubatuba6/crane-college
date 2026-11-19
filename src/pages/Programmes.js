
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../api";

function Programmes() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [programmes, setProgrammes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(0);

  // Identify the academic category from the programme name or code.
  const getCategory = (programme) => {
    const name = (programme.programme_name || "").toLowerCase();
    const code = (programme.programme_code || "").toLowerCase();

    if (
      name.includes("software") ||
      name.includes("information technology") ||
      name.includes("computing") ||
      code.startsWith("se") ||
      code.startsWith("it")
    ) {
      return "Computing";
    }

    if (
      name.includes("business") ||
      name.includes("accounting") ||
      name.includes("finance") ||
      name.includes("marketing") ||
      code.startsWith("bm") ||
      code.startsWith("af") ||
      code.startsWith("mm")
    ) {
      return "Business";
    }

    if (name.includes("education") || code.startsWith("ed")) {
      return "Education";
    }

    if (name.includes("social") || code.startsWith("ss")) {
      return "Social Sciences";
    }

    return "Other";
  };

  // Load programmes from the PostgreSQL backend.
  useEffect(() => {
    const fetchProgrammes = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_BASE_URL}/api/programmes`
        );

        if (!response.ok) {
          throw new Error("Unable to load programmes.");
        }

        const data = await response.json();

        const records = Array.isArray(data)
          ? data
          : data.programmes || data.data || [];

        setProgrammes(records);
      } catch (err) {
        console.error("Programme loading error:", err);
        setError(
          "We could not load the programmes. Please check your internet connection and try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProgrammes();
  }, [reload]);

  // Create categories from the programmes returned by the database.
  const categories = [
    "All",
    ...new Set(programmes.map((programme) => getCategory(programme))),
  ];

  const filteredProgrammes =
    selectedCategory === "All"
      ? programmes
      : programmes.filter(
          (programme) => getCategory(programme) === selectedCategory
        );

  return (
    <div className="crane-programmes-page">

      {/* HEADER */}
      <header className="crane-about-header">
        <Link to="/" aria-label="Crane College home">
            <img
              src="/crane.ico"
              alt="Crane College Logo"
              className="logo-image"
            />
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

        {/* HERO SECTION */}
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

        {/* PROGRAMMES SECTION */}
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
              {filteredProgrammes.length === 1
                ? "programme"
                : "programmes"}
            </span>
          </div>

          {/* CATEGORY FILTERS */}
          {!loading && !error && programmes.length > 0 && (
            <div
              className="crane-programmes-filters"
              aria-label="Filter programmes"
            >
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
          )}

          {/* LOADING */}
          {loading && (
            <div className="crane-programmes-message">
              <h3>Loading programmes...</h3>
              <p>Please wait while we retrieve our academic programmes.</p>
            </div>
          )}

          {/* ERROR */}
          {!loading && error && (
            <div className="crane-programmes-message">
              <h3>Unable to load programmes</h3>
              <p>{error}</p>

              <button
                type="button"
                onClick={() => setReload((previous) => previous + 1)}
              >
                Try Again
              </button>
            </div>
          )}

          {/* EMPTY DATABASE */}
          {!loading && !error && programmes.length === 0 && (
            <div className="crane-programmes-message">
              <h3>No programmes available</h3>
              <p>
                There are currently no programmes registered in our
                academic database.
              </p>
            </div>
          )}

          {/* PROGRAMME CARDS */}
          {!loading && !error && filteredProgrammes.length > 0 && (
            <div className="crane-programmes-grid">
              {filteredProgrammes.map((programme) => {
                const category = getCategory(programme);

                return (
                  <article
                    className="crane-programme-card"
                    key={programme.id || programme.programme_code}
                  >
                    <div className="crane-programme-card-top">
                      <div className="crane-programme-symbol">
                        {programme.programme_code || "CC"}
                      </div>

                      <span className="crane-programme-category">
                        {category}
                      </span>
                    </div>

                    <h3>{programme.programme_name}</h3>

                    <p className="crane-programme-description">
                      {programme.description ||
                        "Contact the admissions office for more information about this programme."}
                    </p>

                    <div className="crane-programme-card-footer">
                      <span>
                        <span className="crane-programme-footer-label">
                          Duration
                        </span>

                        <strong>
                          {programme.duration || "Contact the college"}
                        </strong>
                      </span>

                      <Link
                        to="/admissions"
                        className="crane-programme-learn-more"
                        aria-label={`Apply for ${programme.programme_name}`}
                      >
                        Apply Now <span>→</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* NO RESULTS FOR SELECTED CATEGORY */}
          {!loading &&
            !error &&
            programmes.length > 0 &&
            filteredProgrammes.length === 0 && (
              <div className="crane-programmes-message">
                <h3>No programmes in this category</h3>
                <p>Choose another category to explore available programmes.</p>
              </div>
            )}

          <div className="crane-programmes-note">
            <span className="crane-programmes-note-icon">i</span>

            <p>
              <strong>Important:</strong> Programme information is
              retrieved from the Crane College academic database.
              Please contact Admissions for additional entry
              requirements and programme information.
            </p>
          </div>

        </section>

        {/* ADMISSIONS CALL TO ACTION */}
        <section className="crane-programmes-cta">
          <div>
            <span>READY TO TAKE THE NEXT STEP?</span>

            <h2>Your journey starts here.</h2>

            <p>Visit admissions to learn about the application process.</p>
          </div>

          <Link
            to="/admissions"
            className="crane-programmes-cta-button"
          >
            View Admissions <span>→</span>
          </Link>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="crane-programmes-footer">
        <span>✦ CRANE COLLEGE</span>
        <p>Learning today. Leading tomorrow.</p>
      </footer>

    </div>
  );
}

export default Programmes;
