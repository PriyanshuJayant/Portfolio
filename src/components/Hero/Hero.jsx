import './hero.css'
import React from 'react'
import {motion} from 'framer-motion'
function Hero() {
  return (
    <motion.div
        className='hero-title'
        initial={{
          y:600,
          opacity:0
        }}
        animate={{
            y:500,
            opacity:1
        }}
        transition={{
            duration:1.5,
            delay:1
        }}
    >
        <h1>Priyanshu</h1>
    </motion.div>
  )
}

export default Hero