import React from 'react'
import Logo from "./Logo.jsx";
import {RiArrowDownSLine, RiMenuLine} from "@remixicon/react";
import {navItems} from "../data/data.js";
import SearchInput from "./SearchInput.jsx";
import Button from "./Button.jsx";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white py-4 border-b border-neutral-200 z-50">
      <div className="px-4 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Mobile menu */}
        <nav className="lg:hidden relative">
          <button className="p-3 shadow-util rounded-full font-medium hover:bg-neutral-100 focus:bg-neutral-100 transition-colors">
            <RiMenuLine />
          </button>

          <ul className={`absolute top-full right-0 mt-3 shadow-util bg-white rounded-lg min-w-[200px] w-full transition`}>
            {navItems.map(item => (
              <li key={item.id} className="relative group">
                <a href={item.href} className="flex items-center justify-between gap-1 text-gray-600 hover:text-lime-600 hover:bg-lime-50 transition-all px-4 py-1.5 rounded-lg">
                  {item.label}
                  {item.hasDropdown && <RiArrowDownSLine />}
                  {item.hasDropdown && (
                    <ul className="absolute top-full bg-white right-0 mt-1 border border-neutral-200 shadow-util rounded-lg min-w-[200px] z-50 opacity-0 invisible group-hover:opacity-100">
                      {item.dropdown.map(dropItem => (
                        <li key={dropItem}>
                          <a href="#">{dropItem}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop menu */}
        <nav className="hidden">
          <SearchInput />

          <ul className="">
            {navItems.map(item => (
              <li key={item.id}>
                <a href="" className="">
                  {item.label}
                  {item.hasDropdown && <RiArrowDownSLine />}
                  {item.hasDropdown && (
                    <ul className="">
                      {item.dropdown.map(dropItem => (
                        <li key={dropItem}>
                          <a href="#">{dropItem}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <Button label='Sign up' />
        </nav>

        <div className="">
          <SearchInput />
        </div>

      </div>
    </header>
  );
};

export default Header;