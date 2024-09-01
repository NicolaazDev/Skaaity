import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import React from "react";

interface HtmlTextProps {
  positionX: number;
}

export default function HtmlText({ positionX }: HtmlTextProps) {
  return (
    <Html position={[0, 0, -1]} center zIndexRange={[-1, 0]}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-[100vw] h-full font-street text-[30vh] center-col leading-[1] whitespace-nowrap"
      >
        <span
          style={{
            transform: `translateX(${positionX * 6}px)`,
          }}
          className="span-text center !justify-end"
        >
          Sua loja
        </span>
        <span
          style={{
            transform: `translateX(-${positionX * 6}px)`,
          }}
          className="span-text"
        >
          de Skates
        </span>
      </motion.div>
    </Html>
  );
}
