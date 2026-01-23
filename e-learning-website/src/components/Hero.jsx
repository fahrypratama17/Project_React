import React from 'react'
import { heroLogos } from "../constant/data.js";
import { RiPlayFill } from "@remixicon/react";

const Hero = () => {
  return (
    <section>
      <div className="container">

        {/* Content */}
        <div className="mt-[50px] md:mt-20 text-center">

          {/* Title */}
          <div className="relative max-w-max mx-auto pt-8 pl-8">
            <span className="absolute top-0 left-0">
              <img src="/images/shape-1.png" alt="title shape" width={39} height={43}/>
            </span>

            <div className="">
              <span className="">
                <img src="/images/shape-2.png" alt="title shape" width={48} height={48}/>
              </span>

              <h1>
                <span className="">Unlock </span>
                Your Creative Potential
              </h1>
            </div>
          </div>

          <p>with Online Design and Development Courses.</p>
          <p>Learn from Industry Experts and Enhance Your Skills.</p>

          {/*Button wrapper*/}
          <div className="">
            <button>Explore Courses</button>
            <button>View Pricing</button>
          </div>

          {/*Clients logo*/}
          <div className="">
            <div>
              {heroLogos.map((logo) => (
                // Logo
                <div className="" key={logo.id}>
                  <img src={logo.item} alt="logo" width={logo.width} height={28}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Banner */}
        <figure>
          <img src="/images/hero-banner.png" alt="hero-banner" width={940} height={500}/>

          {/* Dark overlay */}
          <div className="" />

          {/* Play button */}
          <div className="">
            <span>
              <RiPlayFill size={30}/>
            </span>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;