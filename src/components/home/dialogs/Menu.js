import React from "react";
// import { useDispatch } from "react-redux";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useSelector } from "react-redux";

function Menu() {
  const isMenuOpen = useSelector((state) => state.dialogs.isMenuOpen);
  return (
    <div className={`menu  ${isMenuOpen ? "open" : ""} hide-for-desktop`}>
      {/* <div className="container" onClick={(e) => e.stopPropagation()}> */}
      <div className="headphones box">
        <div className="headphone img" />
        <h5>HEADPHONES</h5>
        <div className="shop">
          <p>SHOP</p> <ArrowForwardIosIcon className="arrowForward" />
        </div>
      </div>
      <div className="speakers box">
        <div className="speaker img" />
        <h5>SPEAKERS</h5>
        <div className="shop">
          <p>SHOP</p> <ArrowForwardIosIcon className="arrowForward" />
        </div>
      </div>
      <div className="earphones box">
        <div className="earphone img" />
        <h5>EARPHONES</h5>
        <div className="shop">
          <p>SHOP</p> <ArrowForwardIosIcon className="arrowForward" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Menu;
