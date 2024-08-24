import React, {
  forwardRef,
  ComponentPropsWithRef,
  useRef,
  useEffect,
} from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type ModelProps = ComponentPropsWithRef<"div"> & {
  position: number[];
  rotation: number[];
};

export const Model = forwardRef<HTMLDivElement, ModelProps>((props) => {
  const { scene } = useGLTF("/models/skateboard.glb");

  const mesh = useRef<THREE.Object3D>();

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  return (
    <primitive
      castShadow={false}
      receiveShadow={false}
      object={scene}
      ref={mesh}
      {...props}
    />
  );
});
