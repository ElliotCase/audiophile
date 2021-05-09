import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {
  openOrCloseCart,
  openOrCloseMenu,
} from "../../../../app-redux/features/Dialogs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function Header({ title }) {
  const [show, setShow] = useState(false);
  const isMenuOpen = useSelector((state) => state.dialogs.isMenuOpen);
  const isCartOpen = useSelector((state) => state.dialogs.isCartOpen);
  const history = useHistory();

  const dispatch = useDispatch();
  const transitionNavBar = () =>
    window.scrollY > 100
      ? (setShow(true),
        dispatch(openOrCloseMenu(false)),
        dispatch(openOrCloseCart(false)))
      : setShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });
  return (
    <div className="headphones-header">
      <div className="container">
        <div className={`contents ${show ? "close" : "open"}`}>
          <div className="left">
            <ul
              className="hide-for-desktop"
              onClick={() => dispatch(openOrCloseMenu(!isMenuOpen))}
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <h4>audiophile</h4>
          </div>
          <div className="middle hide-for-tablet">
            <ul>
              <li onClick={() => history.push("/")}>HOME</li>
              <li onClick={() => history.push("/categories/headphones")}>
                HEADPHONES
              </li>
              <li onClick={() => history.push("/categories/speakers")}>
                SPEAKERS
              </li>
              <li onClick={() => history.push("/categories/earphones")}>
                EARPHONES
              </li>
            </ul>
          </div>
          <div
            onClick={() => dispatch(openOrCloseCart(!isCartOpen))}
            className="right"
          >
            <ShoppingCartOutlinedIcon className="icon" />
          </div>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
