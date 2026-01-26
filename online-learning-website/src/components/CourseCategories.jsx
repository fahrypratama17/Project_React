import React from "react";
import { categoriesItems } from "../data/data.js";

const CourseCategories = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <h2 className="section-title text-center">
          Explore 4000+ Free <br />
          Online courses
        </h2>

        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoriesItems.map((item) => (
            <div
              className="hover:shadow-[3px_3px_0px_0px_rgba(0, 0, 0, 1)] focus:shadow-[3px_3px_0px_0px_rgba(0, 0, 0, 1)] cursor-pointer rounded-xl border border-neutral-200 bg-white p-6 transition hover:border-black focus:border-black"
              key={item.id}
            >
              <span className="inline-flex text-neutral-700">
                <item.icon size={30} />
              </span>
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
