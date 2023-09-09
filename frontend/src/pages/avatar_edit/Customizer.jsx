import React from "react";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";

const Customizer = () => {
  const handleOnAvatarExported = (event) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };
  return (
    <div>
      <AvatarCreator
        subdomain="nuxrealm"
        //   config={config}
        className="w-screen h-full"
        onAvatarExported={handleOnAvatarExported}
      />
    </div>
  );
};

export default Customizer;
