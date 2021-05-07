import React from "react";
import Header from "./sub-components/Header";
//import components
import Description from "../../home/sub-components/Description";
import Footer from "../../home/sub-components/Footer";

function Headphones() {
  return (
    <div className="headphones">
      <Header />
      <Description />
      <Footer />
    </div>
  );
}

export default Headphones;
