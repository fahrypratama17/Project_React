import React from 'react'
import {contactInfo, footerLists, socialIcons} from "../constant/data.js";
import { motion } from "motion/react";
import * as variants from '../motion/animation.js'

const Footer = () => {
  return (
    <footer className="pt-14 pb-8 bg-white">
      <motion.div
        variants={variants.staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: true}}
        className="container">

        {/* Footer top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
          <motion.div variants={variants.fadeInUp}>
            <div>
              <img src="/images/logo.png"
                   alt="footer logo"
                   width={150}
                   height={50}/>
            </div>

            <div className="mt-8 space-y-4">
              {contactInfo.map((contact) => (
                <a href="" key={contact.id} className="flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors">
                    {<contact.icon />}
                    {contact.label}
                </a>
              ))}
            </div>
          </motion.div>

          {footerLists.map((list) => (
            <motion.div variants={variants.fadeInUp} key={list.id} className="space-y-3">
              <p className="text-lg font-semibold">{list.title}</p>
              <ul className="space-y-2.5">
                {list.links.map((link, index) => (
                  <li key={index}>
                    <a href="" className="hover:text-orange-50 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={variants.fadeInUp}>
            <p className="text-lg font-semibold">Social Profiles</p>
            <div className="flex mt-5 gap-3">
              {socialIcons.map((icon) => (
                <button className="secondary-btn p-3.5 bg-white-97 hover:bg-white-99 hover:shadow-md transition-all" key={icon.id}>
                  <a href="">{<icon.icon/>}</a>
                </button>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Footer bottom */}
        <motion.p variants={variants.fadeInUp} className="mt-16 text-center lg:mt-20">&copy; {new Date().getFullYear()} Skillbridge. All rights reserved.</motion.p>

      </motion.div>
    </footer>
  );
};

export default Footer;