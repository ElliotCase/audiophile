import React from "react";

//import components
import Header from "./sub-components/Header";
import Banner from "./sub-components/Banner";
import Products from "./sub-components/Products";
import Footer from "./sub-components/Footer";
import { useSelector } from "react-redux";
import Menu from "./dialogs/Menu";

function Home() {
  const isMenuOpen = useSelector((state) => state.dialogs.isMenuOpen);

  return (
    <div className="home">
      <Header />
      {isMenuOpen ? <Menu /> : false}
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
