import React from "react";

function Cart({ id, name, price, image, quantity }) {
  return (
    <div className="cart">
      <div className="left">
        <img src={image} alt="" />
      </div>
      <div className="middle">
        <h4>{name}</h4>
        <p>$ {price}</p>
      </div>
      <div className="right">
        <button>-</button>
        <div className="screen">
          <h6>{quantity}</h6>
        </div>
        <button>+</button>
      </div>
    </div>
  );
}

export default Cart;
