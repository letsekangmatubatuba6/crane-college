import React from "react";
import { ArrowUpRight } from "lucide-react";

function NewsCard({ image, date, category, title, description }) {
  return (
    <article className="news-card">

      <div className="news-image">
        <img src={image} alt={title} />

        <span className="news-category">
          {category}
        </span>
      </div>

      <div className="news-content">

        <p className="news-date">
          {date}
        </p>

        <h3>{title}</h3>

        <p>
          {description}
        </p>

        <button className="read-more">
          Read More
          <ArrowUpRight size={18} />
        </button>

      </div>

    </article>
  );
}

export default NewsCard;