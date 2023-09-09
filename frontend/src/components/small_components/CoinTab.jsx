import React from "react";

const CoinTab = () => {
  return (
    <div className="flex items-center h-auto">
      <div className="h-8 w-8 bg-[url('coin.png')] bg-center bg-cover rounded-full z-10"></div>
      <h1 className="px-3 pl-4 relative -left-3 from-black/80 via-black/30 bg-gradient-to-r text-white">
        400
      </h1>
    </div>
  );
};

export default CoinTab;
