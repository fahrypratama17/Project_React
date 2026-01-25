import React from "react";
import Logo from "./Logo.jsx";
import { RiArrowDownSLine, RiMenuLine } from "@remixicon/react";
import { navItems } from "../data/data.js";
import SearchInput from "./SearchInput.jsx";
import Button from "./Button.jsx";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white py-4">
      <div className="flex items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <Logo />

        {/* Mobile menu */}
        <nav className="relative lg:hidden">
          <button className="shadow-util rounded-full p-3 font-medium transition-colors hover:bg-neutral-100 focus:bg-neutral-100">
            <RiMenuLine />
          </button>

          <ul
            className={`shadow-util invisible absolute top-full right-0 mt-3 w-full min-w-[200px] rounded-lg bg-white opacity-0 transition`}
          >
            {navItems.map((item) => (
              <li key={item.id} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center justify-between gap-1 rounded-lg px-4 py-1.5 text-gray-600 transition-all hover:bg-lime-50 hover:text-lime-600"
                >
                  {item.label}
                  {item.hasDropdown && <RiArrowDownSLine />}
                </a>
                {item.hasDropdown && (
                  <ul className="shadow-util invisible absolute top-full right-0 z-50 mt-1 min-w-[200px] overflow-hidden rounded-lg border border-neutral-200 bg-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {item.dropdown.map((dropItem) => (
                      <li key={dropItem}>
                        <a
                          href="#"
                          className="block px-4 py-2 transition-colors hover:bg-lime-50 hover:text-lime-600"
                        >
                          {dropItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop menu */}
        <nav className="hidden flex-1 flex-wrap lg:flex">
          <div className="mx-auto flex items-center gap-7">
            <div>
              <SearchInput />
            </div>

            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id} className="group relative">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-gray-600 transition-colors hover:text-lime-600 focus:text-lime-600"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <RiArrowDownSLine className="transition-transform group-hover:rotate-180 group-focus:rotate-180" />
                    )}
                  </a>
                  {item.hasDropdown && (
                    <ul className="shadow-util invisible absolute top-full left-0 z-50 mt-1 min-w-[200px] overflow-hidden rounded border border-neutral-200 bg-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {item.dropdown.map((dropItem) => (
                        <li key={dropItem}>
                          <a
                            href="#"
                            className="block px-4 py-2 transition-colors hover:bg-lime-50 hover:text-lime-600"
                          >
                            {dropItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Button label="Sign up" />
        </nav>

        <div className="mt-4 w-full xl:hidden">
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default Header;
