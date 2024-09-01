"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Stage, useProgress } from "@react-three/drei";

import { Model } from "@/components/hero/model";
import HtmlText from "./text";
import { Progress } from "@/components/ui/progress";

const initialRotation = -1.6;
const rotationSpeed = 500; // 1000 = 1 second, 500 = 0.5 second ...
const maxRotation = 5;
const maxScroll = 1000;

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center className="center-col">
      <span>Carregando...</span>
      <Progress
        className="mt-6 w-[310px] h-[8px] rounded-none"
        value={progress}
      />
    </Html>
  );
}

const ThreeScene = () => {
  const [rotation, setRotation] = useState(initialRotation);
  const [positionX, setPositionX] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newRotation = initialRotation + scrollPosition / rotationSpeed;

      if (newRotation > maxRotation) {
        newRotation = maxRotation;
      }

      setRotation(newRotation);

      let newPositionX = (scrollPosition / maxScroll) * 100;
      if (newPositionX > 4000) newPositionX = 4000;

      setPositionX(newPositionX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.classList.remove("scroll");
    }
  }, [loading]);

  return (
    <div className="fixed top-0 w-[100vw] h-[100vh] left-0 z-[-1] pointer-events-none">
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
        <Suspense fallback={<Loader />}>
          <Stage
            preset="portrait"
            intensity={1}
            environment="city"
            center={{ precise: true }}
            adjustCamera={false}
          >
            <HtmlText positionX={positionX} />
            <Model
              position={[0, 0, 0]}
              rotation={[rotation, rotation, rotation]}
            />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
