import React, { useState } from "react";

const Tab = () => {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8 bg-[url('coin.png')] bg-center bg-cover rounded-full z-10"></div>
      <h1 className="px-3 pl-4 relative -left-3 from-black/80 via-black/30 bg-gradient-to-r text-white">
        1233333
      </h1>
    </div>
  );
};

const StoneTab = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="h-auto relative">
      <div className="flex items-center">
        <div
          onClick={handleDropDown}
          className="h-8 w-8 bg-[url('coin.png')] bg-center bg-cover rounded-full z-10"
        ></div>
        <h1 className="px-3 pl-4 relative -left-3 from-black/80 via-black/30 bg-gradient-to-r text-white">
          12
        </h1>
      </div>
      {dropDown && (
        <div className="absolute transition-all p-1 space-y-1 bg-white/50 backdrop-blur-md mt-2 rounded">
          <Tab />
          <Tab />
          <Tab />
          <Tab />
        </div>
      )}
    </div>
  );
};

export default StoneTab;
