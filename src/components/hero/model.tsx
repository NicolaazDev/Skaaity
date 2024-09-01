"use client";

import React, {
  forwardRef,
  ComponentPropsWithRef,
  useRef,
  useEffect,
  useState,
} from "react";

import { useGLTF } from "@react-three/drei";

import * as THREE from "three";

import { motion } from "framer-motion-3d";

type ModelProps = ComponentPropsWithRef<"div"> & {
  position: number[];
  rotation: number[];
};

export const Model = forwardRef<HTMLDivElement, ModelProps>((props) => {
  const { scene } = useGLTF("/models/skateboard.glb");
  const group = useRef<any>();
  const [loaded, setLoaded] = useState(false);

  const mesh = useRef<THREE.Object3D>();

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (loaded) {
      document.body.classList.add("scroll");
    }
  }, [loaded]);

  return (
    <motion.group
      ref={group}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      onAnimationComplete={() => setLoaded(true)}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <primitive
        castShadow={false}
        receiveShadow={false}
        object={scene}
        ref={mesh as any}
        {...(props as any)}
      />
    </motion.group>
  );
});
