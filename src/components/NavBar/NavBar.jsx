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
      {/* Parent Starting  */}
      <motion.div
        className="navBar"
        initial={{ y: 0, opacity: 0.01 }}
        animate={show ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        style={{ position: "fixed", top: 0, width: "100%" }}
      >
        {/* Home Wrapper  */}
        <motion.div
          className="glass-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <GlassElement
            className="nav-btn"
            width={80}
            height={55}
            radius={90}
            depth={1}
            blur={0.3}
            chromaticAberration={5}
            debug={false}
          >
            Home
          </GlassElement>
        </motion.div>

        {/* button container wrapper  */}
        <motion.div
          className="nav-btn-container"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Projects  */}
          <GlassElement
            className="nav-btn-container-child"
            width={300}
            height={75} /* 75 */
            radius={90}
            depth={4}
            blur={1}
            chromaticAberration={5}
            debug={false}
          >
            <motion.div
              className="glass-wrapper "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <GlassElement
                className="nav-btn"
                width={80}
                height={55}
                radius={90}
                depth={4}
                blur={1}
                chromaticAberration={5}
                debug={false}
              >
                Projects
              </GlassElement>
            </motion.div>

            {/* Skills  */}
            <motion.div
              className="glass-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <GlassElement
                className="nav-btn"
                width={80}
                height={55}
                radius={90}
                depth={4}
                blur={1}
                chromaticAberration={5}
                debug={false}
              >
                Skills
              </GlassElement>
            </motion.div>

            {/* About  */}
            <motion.div
              className="glass-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <GlassElement
                className="nav-btn"
                width={80}
                height={55}
                radius={90}
                depth={4}
                blur={1}
                chromaticAberration={5}
                debug={false}
              >
                About
              </GlassElement>
            </motion.div>
          </GlassElement>
        </motion.div>

        {/* Contact  */}
        <motion.div
          className="glass-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <GlassElement
            className="nav-btn"
            width={80}
            height={55}
            radius={90}
            depth={4}
            blur={1}
            chromaticAberration={5}
            debug={false}
          >
            Contact
          </GlassElement>
        </motion.div>

        {/* Parent Ending */}
      </motion.div>
    </>
  );
}

export default NavBar;
