import React from "react";

//import components
import Header from "./sub-components/Header";
import Banner from "./sub-components/Banner";
import Products from "./sub-components/Products";
import Footer from "./sub-components/Footer";
import Galleries from "./sub-components/Galleries";
import Description from "./sub-components/Description";

import Menu from "./dialogs/Menu";

function Home() {
  return (
    <div className="home">
      <Header />
      <Menu />
      <Banner />
      <Products />
      <Galleries />
      <Description />
      <Footer />
    </div>
  );
}

export default Home;
