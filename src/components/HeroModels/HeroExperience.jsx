import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Office } from "./Office";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width : 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width : 768px)" });
  const controlsRef = useRef();

  return (
    <Canvas camera={{ position: [95, 25, 25], fov: 10 }}>
      <OrbitControls ref={controlsRef} enablePan={true} enableZoom={!isTablet} maxDistance={45} minDistance={5} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 6} autoRotate autoRotateSpeed={0.5} />
      <HeroLights />
      {/* <Particles count={74} /> */}
      <group scale={isMobile ? 1.2 : 1} position={[10, -1, -2]} rotation={[0, 6, 0]}>
        {/* <Room /> */}
        <Office />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
