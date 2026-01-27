import React from "react";
import Logo from "./Logo.jsx";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "@remixicon/react";
import { footerLinks } from "../data/data.js";
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";
import { fadeInUp } from "../motion/animation.js";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-16 pb-9 text-white">
      <motion.div
        variants={variants.staggerContainer}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="container space-y-14 sm:space-y-20 lg:space-y-24"
      >
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_0.7fr_0.8fr_0.8fr] lg:gap-8">
          <motion.div variants={fadeInUp} className="space-y-4">
            <Logo />
            <p className="text-neutral-400">
              Empowering learners worldwide with quality education and skills.
            </p>

            <div className="flex items-center gap-4">
              {[
                RiFacebookBoxFill,
                RiTwitterFill,
                RiInstagramFill,
                RiLinkedinFill,
              ].map((Icon) => (
                <motion.a
                  variants={fadeInUp}
                  href="#"
                  className="rounded-full bg-neutral-800 p-2 transition-colors hover:bg-lime-600 focus:bg-lime-600"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((item) => (
            <motion.div variants={fadeInUp} className="space-y-3" key={item.id}>
              <p className="text-lg font-bold">{item.title}</p>
              <ul className="space-y-2">
                {item.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-400 transition-colors hover:text-lime-600 focus:text-lime-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3"
        >
          <p className="text-neutral-400">
            &copy; {new Date().getFullYear()} Brischo.all rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            {["Privacy Policy", "Terms & Condition", "Cookie Policy"].map(
              (label) => (
                <motion.a
                  variants={fadeInUp}
                  href="#"
                  className="text-neutral-400 transition-colors hover:text-lime-600 focus:text-lime-600"
                  key={label}
                >
                  {label}
                </motion.a>
              ),
            )}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
