import React from 'react'
import {contactInfo, footerLists, socialIcons} from "../constant/data.js";

const Footer = () => {
  return (
    <footer className="pt-14 pb-8 bg-white">
      <div className="container">

        {/* Footer top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
          <div>
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
          </div>

          {footerLists.map((list) => (
            <div key={list.id} className="space-y-3">
              <p className="text-lg font-semibold">{list.title}</p>
              <ul className="space-y-2.5">
                {list.links.map((link, index) => (
                  <li key={index}>
                    <a href="" className="hover:text-orange-50 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-lg font-semibold">Social Profiles</p>
            <div className="flex mt-5 gap-3">
              {socialIcons.map((icon) => (
                <button className="secondary-btn p-3.5 bg-white-97 hover:bg-white-99 hover:shadow-md transition-all" key={icon.id}>
                  <a href="">{<icon.icon/>}</a>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <p className="mt-16 text-center lg:mt-20">&copy; {new Date().getFullYear()} Skillbridge. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;