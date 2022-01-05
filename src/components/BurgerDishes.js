import React from "react";
import burger from "../bugger.png";

function BurgerDishes() {
  return (
    <div className="home">
      <div className="burger">
        <div className="content">
          <div className="title">ABC Burger Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci. Nunc dolor magna,
              fringilla eget dignissim a, finibus id magna. Cras in faucibus
              metus, et tincidunt libero.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={burger} alt="" />
        </div>
      </div>
      <div className="burger">
        <div className="content">
          <div className="title">GHI Burger Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci. Nunc dolor magna,
              fringilla eget dignissim a, finibus id magna. Cras in faucibus
              metus, et tincidunt libero.{" "}
            </p>
          </div>
        </div>
        <div className="image">
          <img src={burger} alt="" />
        </div>
      </div>
      <div className="burger">
        <div className="content">
          <div className="title">JKL Burger Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci. Nunc dolor magna,
              fringilla eget dignissim a, finibus id magna. Cras in faucibus
              metus, et tincidunt libero.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={burger} alt="" />
        </div>
      </div>
      <div className="burger">
        <div className="content">
          <div className="title">MNO Burger Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci. Nunc dolor magna,
              fringilla eget dignissim a, finibus id magna. Cras in faucibus
              metus, et tincidunt libero.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={burger} alt="" />
        </div>
      </div>
      <div className="burger">
        <div className="content">
          <div className="title">PQR Burger Item </div>
          <div className="disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id dapibus mi, sit amet condimentum orci. Nunc dolor magna,
              fringilla eget dignissim a, finibus id magna. Cras in faucibus
              metus, et tincidunt libero.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={burger} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BurgerDishes;
