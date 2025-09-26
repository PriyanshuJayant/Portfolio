import "./navBar.css";
import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { GlassElement } from "../../assets/GlassElement/GlassElement";

function NavBar() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      {/* <motion.div
        className="navBar"
        initial={{ opacity: 0.01 }}
        animate={show ? { opacity: 1 } : { opacity: 0.01 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ position: "fixed", top: 0, width: "100%" }}
      > */}
        <motion.div
        className="navBar"
        initial={{
           y: 0,
           opacity: 0.01
        }}
        animate={show ? { y: 0, opacity: 1 } : { y: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20
        }}
        style={{ position: "fixed", top: 0, width: "100%" }}
      >
        <GlassElement
          width={80}
          height={55}
          radius={90}
          depth={1}
          blur={0.5}
          chromaticAberration={5}
          debug={false}
          className="nav-btn"
        >
          Home
        </GlassElement>

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
