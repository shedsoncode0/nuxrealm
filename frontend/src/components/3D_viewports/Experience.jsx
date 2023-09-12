import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  useCursor,
  useEnvironment,
} from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";
import Avatar from "../3Dmodel_jsx_component/Avatar";
import { charactersAtom, socket } from "../socket_io/SocketManager";
import { useAtom } from "jotai";
import PortalExperiment from "../3Dmodel_jsx_component/PortalExperiment";

export const Experience = () => {
  const [characters] = useAtom(charactersAtom);
  const [onFloor, setOnFloor] = useState(false);
  useCursor(onFloor);
  const envMap = useEnvironment({ files: "/industrial_sunset_puresky_4k.hdr" });
  return (
    <>
      <Environment map={envMap} blur={0} />
      <OrbitControls makeDefault />
      <PerspectiveCamera position={[0, 0, 2.5]} fov={30} makeDefault />
      <ambientLight intensity={1} />
      {/* <ContactShadows blur={2} /> */}
      <Stars />
      <Float speed={0.2} rotationIntensity={0.2}>
        <PortalExperiment
          position={[0, -0.3, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        {/* <Avatar scale={0.4} position={[0, -0.4, 0]} /> */}
      </Float>
    </>
  );
};
