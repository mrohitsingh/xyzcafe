import React from "react";
import { Link } from "react-router-dom";
import Burger from "../bugger.png";
import Panner from "../pan.png";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <Link to="/burger">
        <div className="burger">
          <div className="title"> Burger Dishes</div>
          <div className="image">
            <img src={Burger} alt="" />
          </div>
        </div>
      </Link>
      <Link to="/panner">
        <div className="panner">
          <div className="title"> Panner Dishes</div>
          <div className="image">
            <img src={Panner} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;
