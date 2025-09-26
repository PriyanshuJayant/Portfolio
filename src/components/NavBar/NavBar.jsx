import './navBar.css'
import React from "react";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <>
      <motion.div className="navBar">
          <motion.a className="nav-btn"
              drag
          >Home</motion.a>
        <div className='nav-btn-container'>
          <a className="nav-btn">Projects</a>
          <a className="nav-btn">Skills</a>
          <a className="nav-btn">About Me</a>
        </div>
          <a className="nav-btn">Contact Me</a>
      </motion.div>
    </>
  );
}

export default NavBar;
