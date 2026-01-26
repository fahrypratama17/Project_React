import React from "react";
import { testimonials } from "../data/data.js";
import { RiDoubleQuotesR } from "@remixicon/react";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-1.5">
          <h2 className="section-title">What learners are saying</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad minima
            quidem recusandae soluta ut?
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              className="space-y-3.5 rounded-xl border border-neutral-200 bg-white p-8 shadow-sm nth-[2]:rotate-2"
              key={item.id}
            >
              <span className="inline-flex size-8 items-center justify-center rounded-xl bg-yellow-400">
                <RiDoubleQuotesR />
              </span>
              <p className="text">{item.text}</p>
              <div className="flex items-center gap-3">
                <div className="size-10">
                  <img
                    src={item.image}
                    alt={item.author}
                    width={150}
                    height={150}
                    className="w-ful h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-bold">{item.author}</p>
                <p className="text truncate text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
