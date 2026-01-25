import React from 'react'
import { Carousel } from "./ui/Carousel.jsx";
import {ProjectsItems} from "../constant/data.js";

const Projects = () => {
  return (
    <section>
      <div className="container">
        <h2>Recent Projects</h2>

        {/* Card wrapper */}
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={ProjectsItems}/>
        </div>

      </div>
    </section>
  );
};

export default Projects;