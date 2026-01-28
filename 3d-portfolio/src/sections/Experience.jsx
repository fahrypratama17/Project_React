import React from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import { expCards } from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-padding mt-20 w-full md:mt-40 xl:px-0"
    >
      <div className="h-full w-full px-5 md:px-20">
        <TitleHeader
          title="Professional Work Experience"
          sub="My Career Overview"
        />

        <div className="relative mt-32">
          <div className="relative z-50 space-y-10 xl:space-y-32">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
