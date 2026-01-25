import React from 'react'
import {RiBookOpenLine} from "@remixicon/react";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="bg-lime-600 text-white size-8 flex items-center justify-center rounded-lg">
        <RiBookOpenLine size={24}/>
      </span>
      <span className="text-xl font-bold tracking-tight">Brischo</span>
    </div>
  );
};

export default Logo;