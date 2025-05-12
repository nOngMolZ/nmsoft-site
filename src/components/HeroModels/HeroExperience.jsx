import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Office } from "./Office";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const controlsRef = useRef();

  // Determine camera position and FOV based on device size
  const cameraPosition = isMobile ? [120, 30, 30] : isTablet ? [110, 28, 28] : [95, 25, 25];

  const cameraFOV = isMobile ? 15 : isTablet ? 15 : 10;

  // Adjust scale based on device size - smaller scale means more zoomed out view
  const modelScale = isMobile ? 0.9 : isTablet ? 1 : 1;

  return (
    <Canvas camera={{ position: cameraPosition, fov: cameraFOV }}>
      <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={!isTablet}
        maxDistance={isMobile ? 60 : isTablet ? 50 : 45}
        minDistance={isMobile ? 8 : isTablet ? 6 : 5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 6}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <HeroLights />
      {/* <Particles count={74} /> */}
      <group scale={modelScale} position={[10, -1, -2]} rotation={[0, 6, 0]}>
        {/* <Room /> */}
        <Office />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
