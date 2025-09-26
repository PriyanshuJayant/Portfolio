// import "./GlassElement.css";
// import { CSSProperties, ReactNode, useState } from "react";
// import {
//   getDisplacementFilter,
//   DisplacementOptions,
// } from "./getDisplacementFilter";
// import { getDisplacementMap } from "./getDisplacementMap";

// type GlassElementProps = DisplacementOptions & {
//   children?: ReactNode | undefined;
//   blur?: number;
//   debug?: boolean;
//   onClick?: () => void;
// };

// export const GlassElement = ({
//   height,
//   width,
//   depth: baseDepth,
//   radius,
//   children,
//   strength,
//   chromaticAberration,
//   blur = 2,
//   debug = false,
// }: GlassElementProps) => {
//   /* Change element depth on click */
//   const [clicked, setClicked] = useState(false);
//   // let depth = baseDepth / (clicked ? 0.7 : 1);
//   const scaleFactor = Math.min(width, height) / 200;
// let depth = (baseDepth  *scaleFactor ) / (clicked ? 0.7 : 1);
// let scaledRadius = radius * scaleFactor;

//   /* Dynamic CSS properties */
//   const style: CSSProperties = {
//     height: `${height}px`,
//     width: `${width}px`,
//     borderRadius: `${radius}px`,
//     backdropFilter: `blur(${blur / 2}px) url('${getDisplacementFilter({
//       height,
//       width,
//       radius,
//       depth,
//       strength,
//       chromaticAberration,
//     })}') blur(${blur}px) brightness(1.1) saturate(1.5) `,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     userSelect: "none",
//     color: "#fff",
//     fontWeight: "500",
//     fontSize: "16px",
//     transition: "transform 0.15s ease",
//     transform: clicked ? "scale(0.95)" : "scale(1)",
//   };

//   /* Debug mode: display the displacement map instead of actual effect */
//   if (debug === true) {
//     style.background = `url("${getDisplacementMap({
//       height,
//       width,
//       radius,
//       depth,
//     })}")`;
//     style.boxShadow = "none";
//   }
//   return (
//     <div
//       className="box"
//       style={style}
//       onMouseDown={() => setClicked(true)}
//       onMouseUp={() => setClicked(false)}
//     >
//       {children}
//     </div>
//   );
// };

import "./GlassElement.css";
import { CSSProperties, ReactNode, useState } from "react";
import {
  getDisplacementFilter,
  DisplacementOptions,
} from "./getDisplacementFilter";
import { getDisplacementMap } from "./getDisplacementMap";

type GlassElementProps = DisplacementOptions & {
  children?: ReactNode | undefined;
  blur?: number;
  debug?: boolean;
  onClick?: () => void;
};

export const GlassElement = ({
  height,
  width,
  depth: baseDepth,
  radius: baseRadius,
  children,
  strength,
  chromaticAberration,
  blur = 2,
  debug = false,
}: GlassElementProps) => {
  const [clicked, setClicked] = useState(false);

  // Scale values consistently based on element size
  const scaleFactor = Math.min(width, height) / 200;
  const depth = (baseDepth * scaleFactor) / (clicked ? 0.7 : 1);
  const radius = baseRadius * scaleFactor;

  const style: CSSProperties = {
    height: `${height}px`,
    width: `${width}px`,
    borderRadius: `${radius}px`,
    backdropFilter: `blur(${blur / 2}px) url('${getDisplacementFilter({
      height,
      width,
      radius,
      depth,
      strength,
      chromaticAberration,
    })}') blur(${blur}px) brightness(1.1) saturate(1.5)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
    color: "#fff",
    fontWeight: "500",
    fontSize: "16px",
    transition: "transform 0.15s ease",
    transform: clicked ? "scale(0.95)" : "scale(1)",
  };

  if (debug) {
    style.background = `url("${getDisplacementMap({
      height,
      width,
      radius,
      depth,
    })}")`;
    style.boxShadow = "none";
  }

  return (
    <div
      className="box"
      style={style}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      {children}
    </div>
  );
};
