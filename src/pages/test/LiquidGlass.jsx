import "./liquidGlass.css";
import React from "react";
import { motion } from "framer-motion";
// import { GlassElement } from "./GlassElement/GlassElement";
import { GlassElement } from "../../assets/GlassElement/GlassElement";

function LiquidGlass() {
  return (
    <>
      <div className="overlay">
        <GlassElement
          width={80}
          height={55}
          radius={90}
          depth={1}
          blur={0}
          chromaticAberration={5}
          debug={false}
        >
          Small
        </GlassElement>
        {/* <GlassElement
          width={200}
          height={200}
          radius={100}
          depth={10}
          blur={1}
          chromaticAberration={1}
          debug={false}
        />
        <GlassElement
          width={200}
          height={200}
          radius={20}
          depth={10}
          blur={1}
          chromaticAberration={1}
          debug={false}
        /> */}
      </div>
      <img src="/images/AS11-40-5865HR.webp" alt="" />
      <img src="/images/AS11-40-5872HR.webp" alt="" />
      <img src="/images/AS11-40-5899HR.webp" alt="" />
      <img src="/images/AS11-40-5902HR.webp" alt="" />
      <img src="/images/AS11-40-6642HR.webp" alt="" />
    </>
  );
}

export default LiquidGlass;
