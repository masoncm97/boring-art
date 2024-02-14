"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import SvgDrawing from "./svg-drawing";
import { I, Will } from "./boring-art";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  visible: {
    strokeDashoffset: 0,
    opacity: 1,
  },
};
export default function Home() {
  const drawingIndex = useRef(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <motion.div
        className="flex w-[50vw] h-32 border border-red-500"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <SvgDrawing
          svgDrawing={<I className={classNames(`animate-draw-svg`)} />}
          index={0}
          drawingIndex={drawingIndex}
        />
        <SvgDrawing
          svgDrawing={<Will className={classNames(`animate-draw-svg`)} />}
          index={1}
          drawingIndex={drawingIndex}
        />
      </motion.div>
    </main>
  );
}
