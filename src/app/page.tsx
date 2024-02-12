"use client";

import { useEffect, useRef, useState } from "react";
import { BoringArt } from "./boring-art";
import classNames from "classnames";

export default function Home() {
  const [length, setLength] = useState(0);

  useEffect(() => {
    var path = document.querySelector("#squiggle") as SVGPathElement;
    if (path) {
      console.log(path.getTotalLength());
      var pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength + " " + pathLength;
      setLength(path.getTotalLength());
    }
  }, []);

  console.log(length);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <BoringArt
        className={classNames(
          length != 0
            ? `animate-draw-svg [--scroll-distance:${length}]`
            : "hidden"
        )}
      />
    </main>
  );
}
