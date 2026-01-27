import React from "react";
import Logo from "./Logo.jsx";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "@remixicon/react";
import { footerLinks } from "../data/data.js";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-16 pb-9 text-white">
      <div className="container space-y-14 sm:space-y-20 lg:space-y-24">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_0.7fr_0.8fr_0.8fr] lg:gap-8">
          <div className="space-y-4">
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
                <a
                  href="#"
                  className="rounded-full bg-neutral-800 p-2 transition-colors hover:bg-lime-600 focus:bg-lime-600"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((item) => (
            <div className="space-y-3" key={item.id}>
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
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <p className="text-neutral-400">
            &copy; {new Date().getFullYear()} Brischo.all rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            {["Privacy Policy", "Terms & Condition", "Cookie Policy"].map(
              (label) => (
                <a
                  href="#"
                  className="text-neutral-400 transition-colors hover:text-lime-600 focus:text-lime-600"
                  key={label}
                >
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
