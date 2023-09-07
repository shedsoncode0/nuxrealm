import React from "react";
import { useState } from "react";

const Header = () => {
  const [dropdown, setDropDown] = useState(false);

  const openDropdown = () => {
    setDropDown(!dropdown);
  };

  return (
    <header className="w-full block bg-zinc-700">
      <div className={`bg-black/50 relative font-sequel flex items-center w-full px-4 py-3 backdrop-blur-md`}>
        <svg
          onClick={() => openDropdown()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-11 h-w-11 mr-1 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <h1 className="text-white text-lg font-medium ">NUXREALM</h1>
        <div className="flex-1 flex justify-end items-center">
          <div className="flex items-center text-sm font-extralight gap-1 mr-4 text-white">
            <a href="#">LOGIN</a>
            <div className="h-4 w-[2px] bg-white" />
            <a href="#">SIGN UP</a>
          </div>
          {/* <a class="fancy" href="#">
          <span class="top-key"></span>
          <span class="text text-white">Play Now</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a> */}
          <button className="py-2 px-3 rounded-[5px] bg-white text-sm font-extralight">
            Play Now
          </button>
        </div>
      </div>
      <div
        className={`w-full relative  rounded-b-[5px] ${
          dropdown ? "h-20" : "h-0"
        } transition-all bg-black/50 backdrop-blur-md bottom-0 left-0`}
      ></div>
    </header>
  );
};

export default Header;
