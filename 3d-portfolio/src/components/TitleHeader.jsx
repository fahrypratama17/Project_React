import React from "react";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div className="text-center text-3xl font-semibold md:text-5xl">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
