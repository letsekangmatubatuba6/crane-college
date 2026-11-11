
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function NewsCard({ news }) {
  const {
    id,
    image,
    date,
    category,
    title,
    description,
    slug
  } = news;

  return (
    <article className="news-card">

      <div className="news-image">
        <img
          src={image || "/images/news-placeholder.jpg"}
          alt={title}
          onError={(event) => {
            event.currentTarget.src = "/images/news-placeholder.jpg";
          }}
        />

        <span className="news-category">
          {category || "College News"}
        </span>
      </div>

      <div className="news-content">

        <p className="news-date">
          {date
            ? new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            : "Date not available"}
        </p>

        <h3>{title}</h3>

        <p>{description}</p>

        <Link
          to={`/news/${slug || id}`}
          className="read-more"
        >
          Read More
          <ArrowUpRight size={18} />
        </Link>

      </div>

    </article>
  );
}

export default NewsCard;
