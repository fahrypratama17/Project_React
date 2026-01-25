import React from 'react'
import {aboutItems} from "../constant/data.js";
import { motion} from "motion/react";
import {fadeInUp, staggerContainer} from "../motion/animation.js";

const About = () => {
  return (
    <section className="section bg-secondary-clr" id="about">
      <motion.div variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                  className="container">
          <motion.h2 variants={fadeInUp}>About me</motion.h2>

          <motion.p variants={fadeInUp} className="mt-3 mb-9">I'm a frontend developer with 5 years of experience building scalable web applications. I specialize in React, TypeScript, and modern CSS frameworks to deliver high-performance solutions. My expertise includes component architecture, state management, API integration, and responsive design. I focus on writing maintainable code and creating accessible user experiences. Currently working with startups and established companies to transform ideas into production-ready applications.</motion.p>

        <div>
          <motion.p variants={fadeInUp} className="text-white font-semibold text-xl mb-3">Skills:</motion.p>
          <motion.ul variants={fadeInUp}>
            {aboutItems.map(item => (
              <li key={item.id}>
                <p>✔ {item.label}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;