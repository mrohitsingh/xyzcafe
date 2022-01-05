import "./App.css";
import { Routes, Route } from "react-router-dom";
import BurgerDishes from "./components/BurgerDishes";
import PannerDishes from "./components/PannerDishes";
import Home from "./components/home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/burger" element={<BurgerDishes />} />
        <Route exact path="/panner" element={<PannerDishes />} />
      </Routes>
    </div>
  );
}

export default App;
