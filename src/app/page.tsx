"use client";

import { useEffect } from "react";
import { BoringArt } from "./boring-art";

export default function Home() {
  useEffect(() => {
    var path = document.querySelector("#squiggle") as SVGPathElement;
    if (path) {
      console.log(path.getTotalLength());
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <BoringArt className={"path animate-draw-svg"} />
    </main>
  );
}
