import React from 'react'
import {contactItems} from "../constant/data.js";
import {RiGithubFill, RiLinkedinBoxFill} from "@remixicon/react";
import { motion} from "motion/react";
import {fadeIn, fadeInUp, staggerContainer} from "../motion/animation.js";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800">

        <div>
          <motion.h2 variants={fadeInUp}>Get In Touch</motion.h2>
          <motion.p variants={fadeInUp} className="mt-3.5 mb-7">Ready to work on your next project. Let's discuss how I can help bring your ideas to life.</motion.p>

          <motion.ul variants={fadeInUp}>
            {contactItems.map(item => (
              <li key={item.id} className="flex items-center gap-1.5">
                <p className="text-white font-semibold">{item.label}</p>
                <a href="#">{item.link}</a>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp} className="flex items-center gap-2 mt-6">
            <button className="hover:text-neutral-300 transition-colors">
              <RiLinkedinBoxFill />
            </button>
            <button className="hover:text-neutral-300 transition-colors">
              <RiGithubFill />
            </button>
          </motion.div>
        </div>

        <motion.form variants={fadeIn} action="" className="grid gap-5">
          <div className="grid gap-2">
            <label htmlFor="name">Name *</label>
            <input type="text" placeholder="Your name" className="input" required/>
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email *</label>
            <input type="email" placeholder="Your email" className="input" required/>
          </div>

          <div className="grid gap-2">
            <label htmlFor="message">Message *</label>
            <textarea id="message" placeholder="Message" className="h-40 border border-neutral-800 indent-4 py-2 resize-none" required></textarea>
          </div>

          <button className="primary-btn max-w-max">Send Message</button>
        </motion.form>

      </motion.div>
    </section>
  );
};

export default Contact;