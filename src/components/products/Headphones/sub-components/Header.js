import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  openOrCloseCart,
  openOrCloseMenu,
} from "../../../../app-redux/features/Dialogs";

function Header() {
  const history = useHistory();
  const path = (path) => history.push(path);
  const isMenuOpen = useSelector((state) => state.dialogs.isMenuOpen);
  const isCartOpen = useSelector((state) => state.dialogs.isCartOpen);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

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
    <div className={`products_header ${show ? "closed" : "opened"}`}>
      <div className="container">
        <div className="contents">
          <div className="left">
            <ul
              onClick={() => dispatch(openOrCloseMenu(!isMenuOpen))}
              className="hide-for-desktop"
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <h4>audiophile</h4>
          </div>
          <div className="middle hide-for-tablet">
            <ul>
              <li onClick={() => path("/")}>HOME</li>
              <li onClick={() => path("/categories/headphones")}>HEADPHONES</li>
              <li onClick={() => path("/categories/speakers")}>SPEAKERS</li>
              <li onClick={() => path("/categories/earphones")}>EARPHONES</li>
            </ul>
          </div>
          <div
            onClick={() => dispatch(openOrCloseCart(!isCartOpen))}
            className="right"
          >
            <ShoppingCartOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
