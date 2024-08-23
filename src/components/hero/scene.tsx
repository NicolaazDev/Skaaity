"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";

import { Model } from "@/components/hero/model";

const initialRotation = -1.6;
const rotationSpeed = 500; // 1000 = 1 second
const maxRotation = 1.6;

const ThreeScene = () => {
  const [rotation, setRotation] = useState(initialRotation);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newRotation = initialRotation + scrollPosition / rotationSpeed;

      if (newRotation > maxRotation) {
        newRotation = maxRotation;
      }

      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-[100vw] h-[100vh] left-0">
      <Canvas
        style={{ position: "absolute", overflowY: "hidden" }}
        className="max-w-screen"
        camera={{
          position: [0, 0, 7.2],
          fov: 30,
          rotation: [0, 0, 0],
          zoom: 7,
        }}
      >
        <ambientLight intensity={0} />
        <directionalLight position={[0, 110, 40]} intensity={1} />
        <Suspense fallback={null}>
          <Stage
            preset="portrait"
            intensity={1}
            environment="city"
            center={{ precise: true }}
            adjustCamera={false}
          >
            <Model position={[0, 0, 0]} rotation={[0, rotation, 0]} />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
