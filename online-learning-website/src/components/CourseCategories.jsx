import React from "react";
import { categoriesItems } from "../data/data.js";
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";
import { fadeInUp } from "../motion/animation.js";

const CourseCategories = () => {
  return (
    <section className="pt-20">
      <motion.div
        variants={variants.staggerContainer}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={fadeInUp} className="section-title text-center">
          Explore 4000+ Free <br />
          Online courses
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CourseCategories;
