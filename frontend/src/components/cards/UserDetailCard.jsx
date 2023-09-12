import React from "react";

const UserDetailCard = () => {
  return (
    <div className="usercard max-w-[250px]  w-full flex h-[70px] bg-black/50 backdrop-blur-sm p-1 pr-8">
      <div className="h-full w-12 bg-red-500 level_card flex flex-col justify-center items-center">
        <h1 className="text-white font-proxon font-normal text-xl">2</h1>
        <h1 className="text-white text-[10px] font-extralight">LEVEL</h1>
      </div>
      <div className="flex-1 text-white ml-[5px] flex flex-col gap-0 space-0 justify-between">
        <div className="h-[42px] w-[46px] bg-slate-500"></div>

        <div className="w-full h-[15px] level_card_loader space-x-1 relative -left-[10px] bg-white text-black pl-3 flex items-center">
          <h1 className="text-[10px] font-extralight">XP:</h1>
          <div className="level_card_loader bg-slate-500 h-[80%] w-11"></div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailCard;
