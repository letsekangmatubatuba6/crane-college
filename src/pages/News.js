
import React from "react";
import { Link } from "react-router-dom";


function News() {
  const news = [
    {
      category: "ACADEMICS",
      title: "Crane College expands academic programmes",
      date: "September 2026",
      icon: "🎓",
      description:
        "Discover academic opportunities and programmes designed to prepare students for the future.",
    },
    {
      category: "STUDENTS",
      title: "New student orientation programme announced",
      date: "September 2026",
      icon: "🤝",
      description:
        "Learn about the orientation programme welcoming students into the Crane College community.",
    },
    {
      category: "RESEARCH",
      title: "Students participate in innovation projects",
      date: "August 2026",
      icon: "💡",
      description:
        "Explore student innovation, creative thinking and projects focused on solving real-world problems.",
    },
    {
      category: "CAMPUS",
      title: "New facilities introduced for students",
      date: "August 2026",
      icon: "🏛️",
      description:
        "Find out about campus facilities and resources that support student learning and development.",
    },
  ];

  return (
    <div className="crane-news-page">
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
          <Link to="/news" className="active">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="crane-news-hero">
        <div className="crane-news-hero-content">
          <span className="crane-news-eyebrow">
            THE LATEST FROM CRANE COLLEGE
          </span>

          <h1>
            Stories that move
            <span> us forward.</span>
          </h1>

          <p>
            Stay informed about college announcements, student
            achievements, academic developments and campus events.
          </p>

          <Link to="/contact" className="crane-news-hero-button">
            Get in touch <span>→</span>
          </Link>
        </div>

        <div className="crane-news-hero-art">
          <div className="crane-news-art-circle"></div>
          <div className="crane-news-art-icon">📰</div>
          <span className="crane-news-floating crane-news-floating-one">
            CAMPUS LIFE
          </span>
          <span className="crane-news-floating crane-news-floating-two">
            COLLEGE NEWS
          </span>
        </div>
      </section>

      <section className="crane-news-content">
        <div className="crane-news-heading">
          <div>
            <span className="crane-news-section-label">
              NEWSROOM
            </span>
            <h2>Latest news & updates</h2>
            <p>
              Explore announcements and stories from across our college.
            </p>
          </div>

          <span className="crane-news-count">
            {news.length} STORIES
          </span>
        </div>

        <div className="crane-news-grid">
          {news.map((item, index) => (
            <article className="crane-news-card" key={item.title}>
              <div className={`crane-news-card-image news-image-${index + 1}`}>
                <span className="crane-news-card-icon">{item.icon}</span>
                <span className="crane-news-card-number">
                  0{index + 1}
                </span>
              </div>

              <div className="crane-news-card-body">
                <div className="crane-news-card-meta">
                  <span className="crane-news-category">
                    {item.category}
                  </span>
                  <span className="crane-news-date">
                    {item.date}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link
                  to={`/news/${index + 1}`}
                  className="crane-news-read-more"
                  onClick={(event) => {
                    event.preventDefault();
                    window.alert(
                      "Full news articles have not been added yet. This story is: " +
                        item.title
                    );
                  }}
                >
                  Read More <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="crane-news-cta">
        <div>
          <span className="crane-news-section-label">STAY CONNECTED</span>
          <h2>Be part of the Crane College story.</h2>
          <p>
            Contact us for information about our programmes,
            activities and announcements.
          </p>
        </div>

        <Link to="/contact" className="crane-news-cta-button">
          Contact the College <span>→</span>
        </Link>
      </section>
    </div>
  );
}

export default News;
