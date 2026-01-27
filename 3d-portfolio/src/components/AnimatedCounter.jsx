import React from "react";
import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg mt-32 xl:mt-0">
      <div className="grid-4-cols mx-auto">
        {counterItems.map((item) => (
          <div className="flex flex-col justify-center rounded-lg bg-zinc-900 p-10">
            <div
              key={counterItems.label}
              className="counter-number mb-2 text-5xl font-bold text-white"
            >
              <CountUp start={0} suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
