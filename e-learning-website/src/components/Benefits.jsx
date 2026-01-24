import React from 'react'
import Title from "./Title.jsx";
import {benefitItems} from "../constant/data.js";
import {RiArrowRightUpLine} from "@remixicon/react";

const Benefits = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        <Title title='Benefits' text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.' link='View All'/>

        {/* Card wrapper */}
        <div className="">
          {benefitItems.map((item) => (
          // Card
            <div className="" key={item.id}>
              {/* Icon */}
              <div className="">
                <img src={item.icon} alt={item.title} width={64} height={64} />
              </div>
              {/* Content */}
              <div className="">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>

              {/* Button */}
              <button>
                <RiArrowRightUpLine size={26}/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;