import React from "react";
import panner from "../pan.png";

function PannerDishes() {
  return (
    <div className="home">
      <div className="burger">
        <div className="content">
          <div className="title">ABC Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={panner} alt="" />
        </div>
      </div>
      <div className="burger">
        <div className="content">
          <div className="title">GHI Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci.{" "}
            </p>
          </div>
        </div>
        <div className="image">
          <img src={panner} alt="" />
        </div>
      </div>
      <div className="burger">
        <div className="content">
          <div className="title">JKL Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={panner} alt="" />
        </div>
      </div>
      <div className="burger">
        <div className="content">
          <div className="title">MNO Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={panner} alt="" />
        </div>
      </div>
      <div className="burger">
        <div className="content">
          <div className="title">XYZ Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={panner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PannerDishes;
