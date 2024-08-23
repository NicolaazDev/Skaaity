import React, { forwardRef, ComponentPropsWithRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type ModelProps = ComponentPropsWithRef<"div"> & {
  position: number[];
  rotation: number[];
};

export const Model = forwardRef<HTMLDivElement, ModelProps>((props) => {
  const { scene } = useGLTF("/models/skateboard.glb");

  const mesh = useRef<THREE.Object3D>();

  return <primitive object={scene} ref={mesh} {...props} />;
});
