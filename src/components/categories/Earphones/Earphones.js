import React from "react";
import Header from "../Headphones/sub-components/Header";
import Menu from "../../home/dialogs/Menu";
import Cart from "../../home/dialogs/Carts";
import Details from "../Headphones/sub-components/Details";
import Products from "../../home/sub-components/Products";
import Description from "../../home/sub-components/Description";
import Footer from "../../home/sub-components/Footer";
import { useSelector } from "react-redux";

function Earphones() {
  const { earphones } = useSelector((state) => state.products.categories);
  return (
    <div>
      <Header title={"EARPHONES"} />
      <Menu />
      <Cart />
      <Details noOfGrids={"one"} whichState={earphones} />
      <Products />
      <Description />
      <Footer />
    </div>
  );
}

export default Earphones;
