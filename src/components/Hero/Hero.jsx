import "./hero.css";
import "tailwindcss";
import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { StarsBackground } from "../ui/stars-background";
import { ShootingStars } from "../ui/shooting-starts";

export default function Home() {
  return (
    <div
      className="hero-container"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <StarsBackground className="z-0" />
      <ShootingStars className="z-10" />
      <div style={{ position: "relative", zIndex: 20 }}>
        <Spline scene="https://prod.spline.design/U3R4d6c5AH4pPf2R/scene.splinecode" />
      </div>
    </div>
  );
}
