import React from "react";
import "./home.css";
import {
  ActivityCard,
  GameTypeCard,
  UserDetailCard,
} from "../../components/cards";
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
      <div className=" flex flex-col flex-1 h-full bg-yellow-400 relative font-sequel  p-1">
        <section className="w-full z-20 flex justify-between">
          <UserDetailCard />
          <div className="w-full h-8  flex justify-end">
            <StoneTab />
            <CoinTab />
          </div>
        </section>

        {/* <section className="absolute w-full h-full z-10">
          <Canvas shadows>
            <color attach="background" args={["#f0f0f0"]} />
            <Experience />
          </Canvas>

          <SocketManager />
        </section> */}

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
