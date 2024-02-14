"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { BoringArt } from "./boring-art";
import { motion } from "framer-motion";

export default function Home() {
  // const [svgs, setSvgs] = useState<JSX.Element[]>([<BoringArt />]);
  const svgs = useRef<JSX.Element[]>([<BoringArt />]);
  const drawSvg = useCallback(() => {
    console.log("yup");
    svgs.current.push(<BoringArt />);
  }, []);

  const intervalId = setInterval(drawSvg, 6000);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      {svgs.current}
    </main>
  );
}
