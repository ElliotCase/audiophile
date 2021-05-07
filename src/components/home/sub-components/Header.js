import React, { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  openOrCloseCart,
  openOrCloseMenu,
} from "../../../app-redux/features/Dialogs";
import { useHistory } from "react-router";

function Header() {
  const [show, setShow] = useState(false);
  const isMenuOpen = useSelector((state) => state.dialogs.isMenuOpen);
  const isCartOpen = useSelector((state) => state.dialogs.isCartOpen);

  const history = useHistory();

  const dispatch = useDispatch();
  const transitionNavBar = () =>
    window.scrollY > 500
      ? (setShow(true),
        dispatch(openOrCloseMenu(false)),
        dispatch(openOrCloseCart(false)))
      : setShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });

  return (
    <header className={`home-header ${show ? `fade-out` : "fade-in"}`}>
      <div className="container">
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
            <p onClick={() => history.push("/")}>audiophile</p>
          </div>
        </div>

        <div className="links hide-for-tablet">
          <ul>
            <li>
              <h3 onClick={() => history.push("/")}>HOME</h3>
            </li>
            <li>
              <h3 onClick={() => history.push("/categories/headphones")}>
                HEADPHONES
              </h3>
            </li>
            <li>
              <h3 onClick={() => history.push("/categories/speakers")}>
                SPEAKERS
              </h3>
            </li>
            <li>
              <h3 onClick={() => history.push("/categories/earphones")}>
                EARPHONES
              </h3>
            </li>
          </ul>
        </div>

        <div
          className="trolleyIcon"
          onClick={() => dispatch(openOrCloseCart(!isCartOpen))}
        >
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
