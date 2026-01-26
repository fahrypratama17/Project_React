import React from "react";
import { brandBannerImgs } from "../data/data.js";
import Marquee from "react-fast-marquee";

const BrandBanner = () => {
  return (
    <section className="-skew-y-3 bg-neutral-900 py-2">
      <div>
        <Marquee autoFill={true} pauseOnHover={true}>
          {brandBannerImgs.map((img, index) => (
            <div className="ml-3 h-11" key={index}>
              <img
                src={img}
                alt="logo"
                className="h-full w-full object-cover"
                width={484}
                height={132}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default BrandBanner;
