import React from "react";
import { RiStarFill } from "@remixicon/react";
import Button from "./Button.jsx";
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";
import { fadeIn, fadeInUp } from "../motion/animation.js";

const Hero = () => {
  return (
    <section className="pt-12 pb-20 lg:pt-18">
      <motion.div
        variants={variants.staggerContainer}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="container grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center"
      >
        <div className="space-y-2.5 sm:text-center lg:text-left">
          <motion.div
            variants={fadeInUp}
            className="tranform inline-flex -rotate-2 transform items-center gap-1 bg-yellow-400 px-3 py-1"
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <RiStarFill key={i} size={12} />
              ))}
            </div>
            <p className="text-xs font-bold tracking-wider">"A JOY TO USE"</p>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl leading-[1.1] font-semibold md:text-5xl lg:text-6xl"
          >
            Professional and Lifelong learning comes here
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-lg text-neutral-600 sm:mx-auto lg:mx-0"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            beatae cum cumque delectus ex exercitationem, id molestias natus
            provident qui, quidem suscipit ut voluptas, voluptates.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-7 grid gap-4 sm:flex sm:justify-center lg:justify-start"
          >
            <Button label="Get Started" primary />
            <Button label="Explore Courses" />
          </motion.div>
        </div>
        <motion.div variants={fadeIn} className="relative mx-auto p-5">
          <div className="shadow-img mx-auto flex w-full max-w-[370px] items-center justify-center overflow-hidden rounded-t-full bg-lime-600">
            <img
              src="/images/hero-img.png"
              alt="hero image"
              width={440}
              height={592}
            />
          </div>
          <img
            src="/images/book-icon.png"
            alt="book icon"
            width={64}
            height={64}
            className="absolute top-20 left-0 -rotate-12"
          />
          <img
            src="/images/star-icon.png"
            alt="star icon"
            width={64}
            height={64}
            className="absolute top-20 right-0"
          />

          <div className="shadow-util absolute bottom-20 left-0 space-y-2 rounded-lg bg-white px-8 py-6 sm:-left-10">
            <span className="flex items-center justify-center rounded-lg bg-lime-100">
              <img
                src="/images/hero-card-icon.png"
                alt="hero card icon"
                width={64}
                height={64}
              />
            </span>
            <p className="text-center">
              <span className="font-bold">100k</span> student <br />
              learn daily
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
