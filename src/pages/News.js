
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import API_BASE_URL from "../api";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_BASE_URL}/api/news`);

        if (!response.ok) {
          throw new Error("Unable to retrieve college news.");
        }

        const data = await response.json();

        setNews(data.news || []);
      } catch (err) {
        console.error("News loading error:", err);
        setError("We could not load the latest news. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="crane-news-page">
       {/* TOP UTILITY BAR */}
            <div className="top-bar">
              <div className="top-bar-container">
                <div className="top-left">
                  <span></span>
                </div>
      
                <div className="top-right">
                  <Link to="/students">Students</Link>
                  <Link to="/e-learning">E-Learning </Link>
                  <Link to="/contact">Staff</Link>
                  <Link to="/contact">Alumni</Link>
                  <Link to="/contact">Giving</Link>
                </div>
              </div>
            </div>

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
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/students">Students</Link>
          <Link to="/news" className="active">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* HERO */}
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

      {/* NEWS CONTENT */}
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

        {/* LOADING */}
        {loading && (
          <div className="crane-news-message">
            <h3>Loading latest news...</h3>
            <p>Please wait while we retrieve college updates.</p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="crane-news-message">
            <h3>Unable to load news</h3>
            <p>{error}</p>

            <button onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        )}

        {/* EMPTY NEWS */}
        {!loading && !error && news.length === 0 && (
          <div className="crane-news-message">
            <h3>No news articles available</h3>
            <p>Please check again later for college announcements.</p>
          </div>
        )}

        {/* NEWS CARDS */}
        {!loading && !error && news.length > 0 && (
          <div className="crane-news-grid">
            {news.map((item, index) => (
              <NewsCard
                key={item.id}
                news={{
                  ...item,
                  image: item.image,
                  date: item.date,
                  category: item.category,
                  title: item.title,
                  description: item.description
                }}
              />
            ))}
          </div>
        )}

      </section>

      {/* CALL TO ACTION */}
      <section className="crane-news-cta">
        <div>
          <span className="crane-news-section-label">
            STAY CONNECTED
          </span>

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
