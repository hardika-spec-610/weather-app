import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const Inputs = ({ city, handleSearch, fetchWetherData }) => {
  return (
    <div className="flex flex-row justify-center my-6 items-center">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="search for city"
          value={city}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <BiSearch
          size={28}
          fill="white"
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={fetchWetherData}
        />
        <MdOutlineLocationOn
          size={28}
          fill="white"
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Inputs;
