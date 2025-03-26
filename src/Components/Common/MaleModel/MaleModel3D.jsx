import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { MaleBodyModel } from "../../3DModels/MaleBodyModel";
import { NewMaleModel } from "../../3DModels/NewMaleModel";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import { MaleBodyModel2 } from "../../3DModels/MaleBodyModel2";

const CameraController = ({ position, distance }) => {
  const { camera } = useThree();

  React.useEffect(() => {
    // Normalize the position vector to get the direction
    const direction = new Vector3(...position).normalize();

    // Multiply the direction by the distance to get the final position
    const finalPosition = direction.multiplyScalar(distance);

    camera.position.set(finalPosition.x, finalPosition.y, finalPosition.z);
    camera.lookAt(0, 0, 0);
  }, [camera, position, distance]);
};

export const MaleModel3D = ({
  cameraPosition,
  distance,
  handleChildFunction,
  takeScreenShort,
  setScreenshot
}) => {
  return (
    <>
      <Canvas
        className=" h-full w-full  border-none outline-none"
        gl={{ antialias: true }}
        draggable={false}
        id="myCanvas"
      >
        {/* <ambientLight intensity={.5} /> */}
        <spotLight intensity={2} />

        {/* <perspectiveCamera position={[5, 5, 10]} fov={-5} /> */}
        <CameraController position={cameraPosition} distance={distance} />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
        />
        <Suspense fallback={null}>
          <Center>
            {/* <MaleBodyModel /> */}
            {/* <NewMaleModel /> */}
            <MaleBodyModel2 takeScreenShort={takeScreenShort} setScreenshot={setScreenshot} />
          </Center>
        </Suspense>

        <Environment preset="city" />
      </Canvas>
    </>
  );
};
