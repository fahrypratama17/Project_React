import React from 'react'
import { RiCloseLine } from "@remixicon/react";

const Header = () => {
  return (
    <header>
      <div className="container">
      {/* Logo */}
        <a href="#">
          <img src="/images/logo.png" alt="logo" width={170} height={50}/>
        </a>

      {/* Mobile menu */}
        <nav className="">
          {/* Close menu */}
          <button className="">
            <RiCloseLine size={30}/>
          </button>

          {/* list */}
          <ul className="">

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;