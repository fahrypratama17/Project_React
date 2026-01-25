import React from 'react'
import { Carousel } from "./ui/Carousel.jsx";
import {ProjectsItems} from "../constant/data.js";
import { motion} from "motion/react";
import {fadeIn, fadeInUp, staggerContainer} from "../motion/animation.js";

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className="container">

        <motion.h2 variants={fadeInUp}>Recent Projects</motion.h2>

        {/* Card wrapper */}
        <motion.div variants={fadeIn} className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={ProjectsItems}/>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Projects;