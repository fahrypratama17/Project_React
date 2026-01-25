import React from 'react'
import {aboutItems} from "../constant/data.js";

const About = () => {
  return (
    <section className="section bg-secondary-clr">
      <div className="container">
          <h2>About me</h2>

          <p className="mt-3 mb-9">I'm a frontend developer with 5 years of experience building scalable web applications. I specialize in React, TypeScript, and modern CSS frameworks to deliver high-performance solutions. My expertise includes component architecture, state management, API integration, and responsive design. I focus on writing maintainable code and creating accessible user experiences. Currently working with startups and established companies to transform ideas into production-ready applications.</p>

        <div>
          <p className="text-white font-semibold text-xl mb-3">Skills:</p>
          <ul className="">
            {aboutItems.map(item => (
              <li key={item.id}>
                <p>✔ {item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;