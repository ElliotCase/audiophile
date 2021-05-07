import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openOrCloseCart } from "../../../app-redux/features/Dialogs";
import Cart from "./Cart";
//import images
import xx99Mark from "../../../assets/cart/image-xx99-mark-two-headphones.jpg";
import xx59 from "../../../assets/cart/image-xx59-headphones.jpg";
import yx1 from "../../../assets/cart/image-yx1-earphones.jpg";

function Carts() {
  const isCartOpen = useSelector((state) => state.dialogs.isCartOpen);
  const cartsArr = useSelector((state) => state.carts.carts);

  const dispatch = useDispatch();

  console.log(cartsArr);

  return (
    <div
      onClick={() => dispatch(openOrCloseCart(false))}
      className={`home-carts ${isCartOpen ? "open" : "close"}`}
    >
      <div className="contents">
        <div className="container" onClick={(event) => event.stopPropagation()}>
          <header>
            <h4>CART (3)</h4> <p>Remove all</p>
          </header>

          <div className="carts">
            <Cart
              id={1}
              image={xx99Mark}
              name={"XX99 MK II"}
              price={2999}
              quantity={1}
            />
            <Cart id={1} image={xx59} name={"XX59"} price={899} quantity={2} />
            <Cart id={1} image={yx1} name={"YX1"} price={2999} quantity={1} />
          </div>

          <div className="totals">
            <p>TOTAL</p>
            <h4>$5,396</h4>
          </div>

          <div className="checkout">
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
