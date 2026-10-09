import React from "react";

function News() {

  const news = [
    {
      category: "ACADEMICS",
      title: "Crane College expands academic programmes",
      date: "September 2026"
    },
    {
      category: "STUDENTS",
      title: "New student orientation programme announced",
      date: "September 2026"
    },
    {
      category: "RESEARCH",
      title: "Students participate in innovation projects",
      date: "August 2026"
    },
    {
      category: "CAMPUS",
      title: "New facilities introduced for students",
      date: "August 2026"
    }
  ];

  return (
    <div>

      <section className="page-hero">
        <div>

          <p className="welcome">
            NEWS & EVENTS
          </p>

          <h1>
            What's happening at Crane.
          </h1>

          <p>
            Stay updated with our latest news and events.
          </p>

        </div>
      </section>


      <section className="news-page">

        <div className="page-container">

          <div className="news-page-grid">

            {news.map((item, index) => (

              <article
                className="news-page-card"
                key={index}
              >

                <span>
                  {item.category}
                </span>

                <small>
                  {item.date}
                </small>

                <h2>
                  {item.title}
                </h2>

                <p>
                  Read the latest information from Crane College
                  and discover what is happening across our institution.
                </p>

                <button>
                  Read More →
                </button>

              </article>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default News;