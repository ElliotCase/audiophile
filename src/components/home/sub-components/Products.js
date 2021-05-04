import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Products() {
  return (
    <section id="products" className="products">
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
    </section>
  );
}

export default Products;
