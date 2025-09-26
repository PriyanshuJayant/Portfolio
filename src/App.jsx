import "./App.css";
import { motion } from "framer-motion";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
// import LiquidGlass from "./pages/test/LiquidGlass";
import { ShootingStars } from "./components/ui/shooting-starts";
import { StarsBackground } from "./components/ui/stars-background";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/test"
              element={
                <>
                
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
