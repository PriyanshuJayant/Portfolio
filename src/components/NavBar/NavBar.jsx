import './navBar.css'
import React from "react";
import { motion } from "framer-motion";
import { GlassElement } from "../../assets/GlassElement/GlassElement";

function NavBar() {
  return (
    <>
      <motion.div className="navBar">
          <motion.a className="nav-btn"
          >Home</motion.a>
        <div className='nav-btn-container'>
          <a className="nav-btn">Projects</a>
          <a className="nav-btn">Skills</a>
          <a className="nav-btn">About</a>
        </div>
          <a className="nav-btn">Contact Me</a>
      </motion.div>
    </>
  );
}

export default NavBar;
