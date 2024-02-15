"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedPath } from "./AnimatedPath";

export default function Home() {
  const [svgs, setSvgs] = useState<JSX.Element[]>([<AnimatedPath key={0} />]);
  const initial = useRef<boolean>(true);
  const scrollToRef = useRef<HTMLDivElement>(null);

  const drawSvg = () => {
    setSvgs((prevSvgs) => {
      const newSvg = <AnimatedPath key={prevSvgs.length + 1} />;
      return [...prevSvgs, newSvg];
    });
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (initial) {
      intervalId = setInterval(drawSvg, 23500);
      initial.current = false;
    }
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [svgs]);

  return (
    <main className="scroll-container min-h-screen flex-col items-center justify-between p-4 sm:p-6 md:p-24 xl:px-64">
      {svgs.map((element) => element)}
      <div ref={scrollToRef} />
    </main>
  );
}
