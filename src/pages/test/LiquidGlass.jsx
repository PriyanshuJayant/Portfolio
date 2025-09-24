import "./style.css";
import React from "react";
import { motion } from "framer-motion";

function LiquidGlass() {
      const bg = document.getElementById('bg');

    window.addEventListener('mousemove', (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;  // adjust multiplier for intensity
      const y = (e.clientY / innerHeight - 0.5) * 20;

      bg.style.backgroundPosition = `${75 + x}% ${15 + y}%`;
    });
  return (
    <>
      <motion.div>
        <button class="lg-btn gl">SVG backdrop</button>
    Hello
    <small id="info">Ironically, backdrop-filters with SVGs (url(#filter)) seem not to be supported on iOS :</small>
        <svg style="display: none">
          <filter
            id="filter"
            color-interpolation-filters="linearRGB"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
          >
            <feDisplacementMap
              in="SourceGraphic"
              in2="SourceGraphic"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="B"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="displacementMap"
            />
            <feGaussianBlur
              stdDeviation="3 3"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="displacementMap"
              edgeMode="none"
              result="blur"
            />
          </filter>
        </svg>
      </motion.div>
    </>
  );
}

export default LiquidGlass;
