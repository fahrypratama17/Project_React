import React from "react";
import { RiSearchLine } from "@remixicon/react";

const SearchInput = () => {
  return (
    <div className="shadow-util flex w-xs rounded-full border border-gray-300 bg-white p-0.5 transition-all focus-within:border-lime-600 focus-within:ring-1 focus-within:ring-lime-600 sm:w-96">
      <input
        type="text"
        placeholder="Search for anything"
        className="flex-1 px-4 py-2 text-sm outline-none"
      />
      <button className="flex h-auto w-16 items-center justify-center rounded-full bg-lime-500 transition-colors hover:bg-lime-600 focus:bg-lime-600">
        <RiSearchLine />
      </button>
    </div>
  );
};

export default SearchInput;
