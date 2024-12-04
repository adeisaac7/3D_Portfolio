import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import { useMediaQuery } from "react-responsive";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1} rotationIntensity={0.8} floatIntensity={1.5}>
      <ambientLight intensity={0.025} />
      <hemisphereLight intensity={0.12}/>
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.8}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {

  const isDesktop = useMediaQuery({ query: "(min-width: 640px)" })

  return isDesktop ? (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  ):(
    <img
      src={icon}
      alt="Technology icon"
      className="w-[70px] h-[70px] opacity-60 object-contain"
    />
  );
};

export default BallCanvas;
