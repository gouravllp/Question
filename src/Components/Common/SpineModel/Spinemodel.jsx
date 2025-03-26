import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { SpineModel } from "../../3DModels/SpineModel";

export const Spinemodel = () => {
  return (
    <>
      <Canvas
        className=" h-full w-full bg-gray-100 border-none outline-none"
        gl={{ antialias: true }}
        draggable={false}
      >
        <ambientLight intensity={1} />
        <spotLight intensity={5} />

        {/* <perspectiveCamera position={[5, 5, 10]} fov={-5} /> */}
        {/* <CameraController position={cameraPosition} distance={distance} /> */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
        />
        <Suspense fallback={null}>
          <Center>
            {/* <MaleBodyModel /> */}
            <SpineModel />
          </Center>
        </Suspense>

        <Environment preset="warehouse" />
      </Canvas>
    </>
  );
};
