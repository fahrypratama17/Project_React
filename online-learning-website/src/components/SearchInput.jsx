import React from 'react'
import {RiSearchLine} from "@remixicon/react";

const SearchInput = () => {
  return (
    <div className="">
      <input type="text" placeholder="Search for anything"/>
      <button className="">
        <RiSearchLine />
      </button>
    </div>
  );
};

export default SearchInput;