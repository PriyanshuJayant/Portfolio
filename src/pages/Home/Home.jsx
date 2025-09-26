import "./home.css";
import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";

function Home() {
  return (
    <>
    <div className="Home-Page">
      <NavBar/>
        <Hero/>
    </div>
    </>
  );
}

export default Home;
