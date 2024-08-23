import { Html } from "@react-three/drei";
import React from "react";

interface HtmlTextProps {
  positionX: number;
}

export default function HtmlText({ positionX }: HtmlTextProps) {
  return (
    <Html position={[0, 0, -1]} center zIndexRange={[-1, 0]}>
      <div className="w-[100vw] h-full font-street text-[30vh] center-col leading-[1] whitespace-nowrap">
        <span
          style={{
            transform: `translateX(${positionX * 10}px)`,
          }}
          className="span-text center !justify-end"
        >
          Sua loja
        </span>
        <span
          style={{
            transform: `translateX(-${positionX * 10}px)`,
          }}
          className="span-text"
        >
          de Skates
        </span>
      </div>
    </Html>
  );
}
