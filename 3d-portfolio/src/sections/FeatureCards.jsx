import React from "react";
import { abilities } from "../constants/index.js";

const FeatureCards = () => {
  return (
    <section className="padding-x-lg w-full">
      <div className="grid-3-cols mx-auto">
        {abilities.map((item) => (
          <div
            key={item.title}
            className="card-border flex flex-col gap-4 rounded-xl p-8"
          >
            <div className="flex-center size-14 rounded-full">
              <img src={item.imgPath} alt={item.title} />
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-lg text-white">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
