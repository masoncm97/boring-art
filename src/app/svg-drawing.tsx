// "use client";

// import { MutableRefObject, useEffect, useRef, useState } from "react";
// import { Will } from "./boring-art";
// import classNames from "classnames";

// interface SVGDrawingProps {
//   svgDrawing: React.ReactNode;
//   index: number;
//   drawingIndex: MutableRefObject<number>;
// }

// export default function SvgDrawing({
//   svgDrawing,
//   index,
//   drawingIndex,
// }: SVGDrawingProps) {
//   const [length, setLength] = useState(0);
//   const [svgElem, setSvgElem] = useState<SVGSVGElement>();

//   useEffect(() => {
//     var path = document.querySelector(`#path_${index}`) as SVGPathElement;
//     var svgElem = document.querySelector(`.svg_${index}`) as SVGSVGElement;
//     var pathLength;
//     if (path) {
//       pathLength = path.getTotalLength();
//       setLength(path.getTotalLength());
//     }
//     if (svgElem) {
//       svgElem.style.strokeDasharray = pathLength + " " + pathLength;
//       svgElem.style.strokeDashoffset = `${pathLength}`;
//       setSvgElem(svgElem);
//       drawingIndex.current += 1;
//       console.log(drawingIndex.current);
//     }
//   }, []);

//   return <>{svgDrawing}</>;
// }
