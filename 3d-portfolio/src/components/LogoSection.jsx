import React from "react";
import { logoIconsList } from "../constants/index.js";

const LogoSection = () => {
  return (
    <div className="relative my-10 md:my-20">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box gap-5 md:gap-12">
          {logoIconsList.map((logo) => (
            <div
              className="flex-center marquee-item flex-none"
              key={logo.imgPath}
            >
              <img src={logo.imgPath} alt={logo.name} />
            </div>
          ))}
          {logoIconsList.map((logo) => (
            <div
              className="flex-center marquee-item flex-none"
              key={logo.imgPath}
            >
              <img src={logo.imgPath} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
