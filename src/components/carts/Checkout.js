import React from "react";
import Footer from "../home/sub-components/Footer";
import Header from "../products/Headphones/sub-components/Header";

function Checkout() {
  return (
    <div className="checkout">
      <Header />
      <div className="checkout_home">
        <h1>Checkout!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
