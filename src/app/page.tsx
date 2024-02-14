"use client";

import { useEffect, useRef, useState } from "react";
import { BoringArt } from "./boring-art";
import classNames from "classnames";

export default function Home() {
  const [length, setLength] = useState(0);
  const [svgElem, setSvgElem] = useState<SVGSVGElement>();

  useEffect(() => {
    var path = document.querySelector("#squiggle") as SVGPathElement;
    var svgElem = document.querySelector(".path") as SVGSVGElement;
    var pathLength;
    if (path) {
      console.log(path.getTotalLength());
      pathLength = path.getTotalLength();
      setLength(path.getTotalLength());
    }
    if (svgElem) {
      console.log(svgElem);
      svgElem.style.strokeDasharray = pathLength + " " + pathLength;
      svgElem.style.strokeDashoffset = `${pathLength}`;
      setSvgElem(svgElem);
    }
    // svgElem.style.transition = "dash 5s linear forwards";
    // svgElem.style.strokeDashoffset = "0";
  }, []);

  console.log(length);
  console.log(svgElem);
  // animate-draw-svg [--scroll-distance:${length}]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <BoringArt
        className={classNames(
          length != 0 && svgElem != undefined ? `animate-draw-svg` : "hidden"
        )}
      />
    </main>
  );
}
