import React from "react";
import { useSelector } from "react-redux";
import Carts from "../../home/dialogs/Carts";
import Menu from "../../home/dialogs/Menu";
import Header from "../Headphones/sub-components/Header";
import ProductsHome from "../Headphones/sub-components/Products";
import Products from "../../home/sub-components/Products";
import Description from "../../home/sub-components/Description";
import Footer from "../../home/sub-components/Footer";

import {
  increaseQuantityyx1,
  decreaseQuantityyx1,
} from "../../../app-redux/features/Products";

function YX1() {
  const { earphones } = useSelector((state) => state.products.products);
  return (
    <div className="products_yx1">
      <Header />
      <Menu />
      <Carts />
      <ProductsHome
        whichQuantityToDecrease={decreaseQuantityyx1}
        whichQuantityToIncrease={increaseQuantityyx1}
        whichState={earphones.yx1}
      />
      <Products />
      <Description />
      <Footer />
    </div>
  );
}

export default YX1;
