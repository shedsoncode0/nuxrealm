import React from "react";
import "./home.css";
import { ActivityCard, GameTypeCard } from "../../components/cards";
import { PrimaryButton } from "../../components/button";

const Home = () => {
  return (
    <div className=" flex flex-col h-screen w-full bg-yellow-400 relative font-sequel bg-cover bg-center bg-no-repeat bg-[url('./assets/image2.png')]">
      <section className="w-full p-3 flex justify-between">
        <div className="max-w-[200px] w-full flex h-14 bg-black/50 p-1 rounded">
          <div className="h-full w-14 bg-red-500 rounded"></div>
          <div className="flex-1 text-white ml-1 flex flex-col gap-0 space-0 justify-between">
            <h1 className="font-light text-sm">Victor</h1>
            <h1 className="text-sm -mt-1">240</h1>
            <div className="w-14 h-2 bg-white" />
          </div>
        </div>
        <div className="w-full h-8  flex justify-end">
          <div className="flex items-center h-auto">
            <div className="h-8 w-8 bg-[url('coin.png')] bg-center bg-cover rounded-full z-10"></div>
            <h1 className="px-3 pl-4 relative -left-3 from-black/80 via-black/30 bg-gradient-to-r text-white">
              400
            </h1>
          </div>
        </div>
      </section>

      {/*Start of middle section */}
      <section className=" flex-1 w-full p-3 mt-5 flex justify-between items-center">
        <div className="flex flex-col w-full max-w-[200px] space-y-1">
          <ActivityCard />
          <ActivityCard />
        </div>
        <div className="flex flex-col w-full max-w-[200px] space-y-1">
          <GameTypeCard />
          <GameTypeCard />
          <GameTypeCard />
        </div>
      </section>
      {/* End of middle section */}

      <div className="w-full flex justify-between p-3">
        <PrimaryButton text="STORE" />

        <div className="flex w-full justify-center items-end space-x-1">
          <button className="px-2 w-full max-w-[120px] h-7 bg-slate-500 border-2 border-b-4 rounded text-[9px] font-thin">
            LEADERBOARD
          </button>
          <button className="px-2 w-full max-w-[120px] h-7 bg-slate-500 border-2 border-b-4 rounded text-[9px] font-thin">
            INVENTORY
          </button>
        </div>
        <PrimaryButton text="NUXREALM" />
      </div>
    </div>
  );
};

export default Home;
