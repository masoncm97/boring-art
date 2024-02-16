"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BoringArt } from "./boring-art";

export default function Home() {
  const [svgs, setSvgs] = useState<JSX.Element[]>([<BoringArt key={0} />]);
  const initial = useRef(true);
  const scrollToRef = useRef<HTMLDivElement>(null);

  const drawSvg = useCallback(() => {
    setSvgs((prevSvgs) => {
      const newSvg = <BoringArt key={prevSvgs.length + 1} />;
      return [...prevSvgs, newSvg];
    });
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (initial) {
      initial.current = false;
      intervalId = setInterval(drawSvg, 23500);
    }
    return () => clearInterval(intervalId);
  }, [drawSvg]);

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
