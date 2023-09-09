import { useProgress } from "@react-three/drei";
import React, { useState } from "react";

const MainLoading = ({ progress }) => {

  return (
    <div className={`w-full ${progress !== 100 ? "opacity-100" : "opacity-0 hidden"} absolute h-screen z-50 bg-cover bg-center bg-no-repeat bg-[url('./assets/image2.png')] transition-all` }>
      <h1 className=" p-10 font-sequel text-2xl text-white">NUXREALM</h1>
      <section className=" h-24 w-full absolute bottom-0 flex flex-col justify-center items-center">
        <h1 className="text-white">Loading...</h1>
        <div className="max-w-[90%] w-full h-3 bg-black/50 border-[1.5px] border-white/50">
          <div style={{ width: `${progress}%` }} className="h-full bg-white" />
        </div>
      </section>
    </div>
  );
};

export default MainLoading;
