import React from "react";
import Header from "./sub-components/Header";
//import components
import Products from "../../home/sub-components/Products";
import Description from "../../home/sub-components/Description";
import Footer from "../../home/sub-components/Footer";
import Menu from "../../home/dialogs/Menu";
import Cart from "../../home/dialogs/Carts";
import Details from "./sub-components/Details";
import { useSelector } from "react-redux";

function Headphones() {
  const { headphones } = useSelector((state) => state.products.categories);
  return (
    <div className="headphones">
      <Header title={"HEADPHONES"} />
      <Menu />
      <Cart />
      <Details noOfGrids={"three"} whichState={headphones} />
      <Products />
      <Description />
      <Footer />
    </div>
  );
}

export default Headphones;
