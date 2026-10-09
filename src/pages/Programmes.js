import React from "react";
import ProgrammeCard from "../components/ProgrammeCard";

function Programmes() {

  const programmes = [
    {
      title: "Bachelor of Software Engineering",
      description:
        "Learn programming, software development, databases and modern computing technologies.",
      category: "Computing",
      duration: "4 Years"
    },
    {
      title: "Bachelor of Information Systems",
      description:
        "Study technology, business systems, databases and information management.",
      category: "Computing",
      duration: "4 Years"
    },
    {
      title: "Bachelor of Business Administration",
      description:
        "Develop knowledge in business management, leadership and entrepreneurship.",
      category: "Business",
      duration: "4 Years"
    },
    {
      title: "Bachelor of Accounting",
      description:
        "Build professional knowledge in accounting, finance and financial management.",
      category: "Business",
      duration: "4 Years"
    },
    {
      title: "Bachelor of Education",
      description:
        "Prepare for a professional career in teaching and education.",
      category: "Education",
      duration: "4 Years"
    },
    {
      title: "Bachelor of Social Sciences",
      description:
        "Explore society, human behaviour and social development.",
      category: "Social Sciences",
      duration: "4 Years"
    }
  ];

  return (
    <>

      <section className="page-hero">
        <div>

          <p className="section-label">
            ACADEMIC PROGRAMMES
          </p>

          <h1>
            Find your
            <span> future.</span>
          </h1>

          <p>
            Explore programmes designed to give you
            knowledge and practical skills.
          </p>

        </div>
      </section>


      <section className="programmes-page">

        <div className="section-container">

          <div className="programme-grid large">

            {programmes.map((programme, index) => (
              <ProgrammeCard
                key={index}
                {...programme}
              />
            ))}

          </div>

        </div>

      </section>

    </>
  );
}

export default Programmes;