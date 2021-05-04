import React, { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openOrCloseMenu } from "../../../app-redux/features/Dialogs";

function Header() {
  const [show, setShow] = useState(false);
  const isMenuOpen = useSelector((state) => state.dialogs.isMenuOpen);
  const dispatch = useDispatch();
  const transitionNavBar = () =>
    window.scrollY > 400
      ? (setShow(true), dispatch(openOrCloseMenu(false)))
      : setShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <header className={`${show ? `fade-out` : ""}`}>
      <div className="bar ">
        <ul
          onClick={() => dispatch(openOrCloseMenu(!isMenuOpen))}
          className="menu-bar hide-for-desktop"
        >
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="title ">
          <p>audiophile</p>
        </div>
      </div>

      <div className="links hide-for-tablet">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#product">HEADPHONES</a>
          </li>
          <li>
            <a href="#speakers">SPEAKERS</a>
          </li>
          <li>
            <a href="#earphones">EARPHONES</a>
          </li>
        </ul>
      </div>

      <div className="trolleyIcon">
        <ShoppingCartOutlinedIcon />
      </div>
    </header>
  );
}

export default Header;
