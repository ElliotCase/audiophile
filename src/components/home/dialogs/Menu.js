import React from "react";
// import { useDispatch } from "react-redux";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import zx9 from "../../../assets/category-speakers/mobile/image-zx9.jpg";
import xx99 from "../../../assets/category-headphones/mobile/image-xx99-mark-one-removebg.png";
import yx1 from "../../../assets/category-earphones/mobile/image-yx1-earphones.jpg";

function Menu() {
  return (
    <div className="menu" onClick={(e) => e.stopPropagation()}>
      <div className="headphones box">
        <img src={xx99} alt="" />
        <h5>HEADPHONES</h5>
        <div className="shop">
          <p>SHOP</p> <ArrowForwardIosIcon className="arrowForward" />
        </div>
      </div>
      <div className="speakers box">
        <img src={zx9} alt="" />
        <h5>SPEAKERS</h5>
        <div className="shop">
          <p>SHOP</p> <ArrowForwardIosIcon className="arrowForward" />
        </div>
      </div>
      <div className="earphones box">
        <img src={yx1} alt="" />
        <h5>EARPHONES</h5>
        <div className="shop">
          <p>SHOP</p> <ArrowForwardIosIcon className="arrowForward" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
