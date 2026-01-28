import React from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import { techStackIcons, techStackImgs } from "../constants/index.js";
import TechIcon from "../components/Models/Tech-Logos/TechIcon.jsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#Skills",
          start: "top center",
        },
      },
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="h-full w-full px-5 md:px-10">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card group overflow-hidden rounded-lg xl:rounded-full"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
