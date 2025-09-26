import "./navBar.css";
import React from "react";
import { motion } from "framer-motion";
import { GlassElement } from "../../assets/GlassElement/GlassElement";

function NavBar() {
  return (
    <>
      <motion.div className="navBar">
        <motion.a className="nav-btn">
          <GlassElement
            width={80}
            height={55}
            radius={90}
            depth={1}
            blur={0.5}
            chromaticAberration={5}
            debug={false}
          >
            Home
          </GlassElement>
        </motion.a>

        <div className="nav-btn-container">
          <GlassElement
            width={80}
            height={55}
            radius={90}
            depth={4}
            blur={1}
            chromaticAberration={5}
            debug={false}
            className="nav-btn"
          >
            Projects
          </GlassElement>
          <GlassElement
            width={80}
            height={55}
            radius={90}
            depth={4}
            blur={1}
            chromaticAberration={5}
            debug={false}
            className="nav-btn"
          >
            Skills
          </GlassElement>
          <GlassElement
            width={80}
            height={55}
            radius={90}
            depth={4}
            blur={1}
            chromaticAberration={5}
            debug={false}
            className="nav-btn"
          >
            About
          </GlassElement>
        </div>
        <GlassElement
          width={80}
          height={55}
          radius={90}
          depth={4}
          blur={1}
          chromaticAberration={5}
          debug={false}
          className="nav-btn"
        >
          Contact
        </GlassElement>
      </motion.div>
    </>
  );
}

export default NavBar;
