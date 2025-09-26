import "./hero.css";
import "tailwindcss";
import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <>
    <main className="hero-container">
      <Spline scene="https://prod.spline.design/U3R4d6c5AH4pPf2R/scene.splinecode" />
    </main>
    <div className="bg-red-800 h-full">
      hello
    </div>
    </>
  );
}
