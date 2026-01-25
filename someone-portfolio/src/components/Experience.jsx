import React from 'react'
import {ResumeItems} from "../constant/data.js";

const Experience = () => {
  return (
    <section className="section" id="resume">
      <div className="container">
        <h2>My Resume</h2>

        {/* Wrapper */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          {ResumeItems.map(item => (
            <div key={item.id} className="divide-y divide-neutral-800">

              <h3 className="text-2xl font-semibold mt-8 pb-3">{item.title}</h3>

              <div className="mt-10 space-y-8">
                {item.list.map((list, index) => (
                  <div key={index} className="flex items-center justify-between flex-wrap gap-6">
                    <div>
                      <h4 className="text-lg lg:text-xl">{list.role}</h4>
                      <p>{list.label}</p>
                    </div>

                    <p className="border border-neutral-700 p-2.5 text-white">{list.time}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;