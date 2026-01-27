import React from "react";
import { benefits } from "../data/data.js";
import { RiCheckboxCircleLine } from "@remixicon/react";
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";
import { fadeIn, fadeInUp } from "../motion/animation.js";

const WhyLearnLive = () => {
  return (
    <section className="py-20">
      <motion.div
        variants={variants.staggerContainer}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="container grid gap-16 lg:grid-cols-[0.7fr_1fr] lg:items-center"
      >
        <motion.div
          variants={fadeIn}
          className="relative order-1 mx-auto p-5 lg:order-first"
        >
          <div className="shadow-img mx-auto flex w-full max-w-[360px] items-center justify-center overflow-hidden rounded-t-full bg-lime-600 px-2.5 pt-9">
            <img
              src="/images/section-img.png"
              alt="section image"
              width={440}
              height={592}
            />
          </div>
          <img
            src="/images/star-icon.png"
            alt="star icon"
            width={64}
            height={64}
            className="absolute top-20 right-0"
          />
        </motion.div>

        <div>
          <motion.h2 variants={fadeInUp} className="section-title mb-2">
            Why learn live with Brischo?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            atque deserunt dicta eum minus nesciunt pariatur perspiciatis, quasi
            reiciendis repudiandae sapiente similique veniam veritatis
            voluptate.
          </motion.p>

          <ul className="mt-8 space-y-4">
            {benefits.map((item) => (
              <motion.li
                variants={fadeInUp}
                className="flex items-start gap-3"
                key={item}
              >
                <span className="shrink-0 text-lime-600">
                  <RiCheckboxCircleLine />
                </span>
                <p className="text font-medium">{item}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyLearnLive;
