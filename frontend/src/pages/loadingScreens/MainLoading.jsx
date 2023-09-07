import React, { useState } from "react";

const MainLoading = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="w-full h-screen relative bg-cover bg-center bg-no-repeat bg-[url('./assets/image2.png')]">
      <h1 className=" p-10 font-sequel text-2xl text-white">NUXREALM</h1>
      <section className=" h-24 w-full absolute bottom-0 flex flex-col justify-center items-center">
        <div className="max-w-lg w-full h-3 bg-black/50 border-[1.5px] border-white/50">
          <div className="h-full w-20 bg-white" />
        </div>
        <h1 className="text-white">23%</h1>
      </section>
    </div>
  );
};

export default MainLoading;
