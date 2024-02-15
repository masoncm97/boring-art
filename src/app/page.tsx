"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BoringArt } from "./boring-art";

export default function Home() {
  // const svgs = useRef<JSX.Element[]>([<BoringArt />]);
  const [svgs, setSvgs] = useState<JSX.Element[]>([<BoringArt key={0} />]);
  const lastClick = useRef(0);
  const scrollToRef = useRef<HTMLDivElement>(null);

  const drawSvg = useCallback(() => {
    const now = Date.now();
    if (now - lastClick.current > 100) {
      lastClick.current = now;
      setSvgs((prevSvgs) => {
        const newSvg = <BoringArt key={prevSvgs.length + 1} />;
        return [...prevSvgs, newSvg];
      });
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(drawSvg, 23500);
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
