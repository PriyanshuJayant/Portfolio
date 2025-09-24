import "./App.css";
import { motion } from "framer-motion";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import LiquidGlass from "./pages/test/LiquidGlass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/test" element={<LiquidGlass/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
