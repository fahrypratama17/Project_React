import React from 'react'
import {heroIcons} from "../constant/data.js";
import { BackgroundGradient } from "./ui/background-gradient.jsx";
import Button from "./Button.jsx";

const Hero = () => {
  return (
    <section className="py-28 lg:pt-40">
      <div className="container flex flex-col items-center">
        
        {/* Image */}
        <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80 rounded-full bg-zinc-900">
          <figure className="rounded-full overflow-hidden">
            <img src="/images/hero-img.png" alt="Alex Chen" width={452} height={452}/>
          </figure>
        </BackgroundGradient>

        {/* Content */}
        <div className="text-center mt-8">
          <h1 className="text-3xl lg:text-5xl mb-1.5 font-bold">Hi,I'm Alex Chen.</h1>
          <h2>Senior Frontend Developer</h2>
          <p className="max-w-[820px] mx-auto mt-4 mb-6">I'm Alex Chen, a frontend developer who architects seamless digital experiences through innovative code and intuitive design. With expertise in cutting-edge technologies and a passion for performance optimization, I transform complex business requirements into scalable, user-centric applications that drive meaningful engagement.</p>

          <div className="flex items-center justify-center gap-5">
            {heroIcons.map(icon => (
              <a href="#" target="_blank" className="hover:text-indigo-400 transition-colors">
                <icon.icon size={30}/>
              </a>
            ))}
          </div>

          {/* Button wrapper */}
          <div className="mt-10 flex items-center justify-center flex-wrap gap-5">
            <Button label="Download CV" classes="primary-btn" icon/>
            <Button label="Let's Collaborate" classes="secondary-btn"/>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;