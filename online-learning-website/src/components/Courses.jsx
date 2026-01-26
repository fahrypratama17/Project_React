import React, { act, useState } from "react";
import { courses } from "../data/data.js";
import { RiStarFill } from "@remixicon/react";
import Button from "./Button.jsx";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filteredCourses = courses.filter((course) => {
    if (activeTab === "All") return true;
    return course.category === activeTab;
  });

  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="space-y-2.5 text-center">
          <h2 className="section-title">Explore courses</h2>
          <p className="text mx-auto max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            autem, blanditiis consectetur culpa dignissimos eius fugiat
            inventore numquam placeat, praesentium repudiandae sunt, tempore
            veritatis!
          </p>
        </div>

        <div className="mt-7">
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Popular", "Recent", "Design", "Marketing", "Coding"].map(
              (tab) => (
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`shadow-util rounded-full px-6 py-2.5 font-medium transition ${activeTab === tab ? "bg-lime-200 hover:bg-lime-300 focus:bg-lime-300" : "hover:bg-neutral-100 focus:bg-neutral-100"}`}
                  key={tab}
                >
                  {tab}
                </button>
              ),
            )}
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <div
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:border-black focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                key={course.id}
              >
                <div className="relative flex h-48 w-full items-center justify-center overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    width={course.width}
                    height={course.height}
                    className="h-full w-full object-cover"
                  />
                  {course.isNew == true && (
                    <div className="absolute top-4 right-4 rotate-3 transform bg-yellow-300 p-1.5 shadow-sm">
                      <span className="text-xs font-bold">New</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 p-6">
                  <h3 className="text-lg font-bold">{course.title}</h3>
                  <p className="text">By {course.author}</p>
                  <div className="flex items-center justify-between">
                    <div className="gap flex items-center gap-1">
                      <span className="inline-flex shrink-0 bg-yellow-100 p-1 text-yellow-600">
                        <RiStarFill size={12} />
                      </span>
                      <p className="text-sm font-bold">{course.rating}</p>
                      <p className="text-xs text-neutral-500">
                        ({course.reviews})
                      </p>
                    </div>
                    <p className="text-lg font-bold">${course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            label="Explore all courses"
            primary
            classes={`mt-12 mx-auto block`}
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
