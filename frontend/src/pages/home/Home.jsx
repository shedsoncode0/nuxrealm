import React from "react";
import "./home.css";
import { ActivityCard, GameTypeCard } from "../../components/cards";
import { PrimaryButton } from "../../components/button";
import { CoinTab, StoneTab } from "../../components/small_components";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../../components/3D_viewports/Experience";
import { SocketManager } from "../../components/socket_io/SocketManager";
import { Loader, useProgress } from "@react-three/drei";
import { MainLoading } from "../loadingScreens";

const Home = () => {
  const { progress } = useProgress();
  return (
    <>
      <MainLoading progress={progress} />
      <div className=" flex flex-col h-screen w-full bg-yellow-400 relative font-sequel bg-cover bg-center bg-no-repeat bg-[url('./assets/image2.png')]">
        <section className="w-full z-20 p-3 flex justify-between">
          <div className="usercard max-w-[250px]  w-full flex h-[70px] bg-black/50 backdrop-blur-sm p-1 pr-8">
            <div className="h-full w-12 bg-red-500 level_card flex flex-col justify-center items-center">
              <h1 className="text-white font-proxon font-normal text-xl">2</h1>
              <h1 className="text-white text-[10px] font-extralight">LEVEL</h1>
            </div>
            <div className="flex-1 text-white ml-[5px] flex flex-col gap-0 space-0 justify-between">
              <div className="h-[42px] w-[46px] bg-slate-500"></div>

              <div className="w-full h-[15px] level_card_loader relative -left-[10px] bg-white text-black pl-3 flex items-center">
                <h1 className="text-[10px] font-extralight">XP:</h1>
                <div className="level_card_loader"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-8  flex justify-end">
            <StoneTab />
            <CoinTab />
          </div>
        </section>

        <section className="absolute h-full w-full z-10">
          <Canvas shadows>
            <color attach="background" args={["#f0f0f0"]} />
            <Experience />
          </Canvas>

          <SocketManager />
        </section>

        {/*Start of middle section */}
        <section className=" flex-1 w-full z-20 p-3 mt-5 flex justify-between items-center">
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

        <div className="w-full flex justify-between p-3 z-20">
          <PrimaryButton text="STORE" />

          <div className="flex w-full justify-center items-end space-x-1">
            <div className="dd w-full max-w-[400px] h-14 backdrop-blur-md bg-black/40 h">
              ddd
            </div>
          </div>

          <PrimaryButton text="NUXREALM" />
        </div>
      </div>
    </>
  );
};

export default Home;
