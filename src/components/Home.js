import React, { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Home() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () =>
    window.scrollY > 400 ? handleShow(true) : handleShow(false);
  console.log(show);
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className="home">
      <header className={show ? `fade-out` : ""}>
        <div className="bar ">
          <ul className="menu-bar hide-for-desktop">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="title ">
            <p>audiophile</p>
          </div>
        </div>

        <div className="trolleyIcon">
          <ShoppingCartOutlinedIcon />
        </div>
      </header>

      <section className="banner hide-for-desktop">
        <div className="banner-titles">
          <div className="banner-title a">
            <p>NEW PRODUCT</p>
          </div>

          <div className="banner-title b">
            <h4>XX99 MARK II</h4>
            <h4>HEADPHONE</h4>
          </div>
          <div className="banner-title c">
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <div className="banner-title d">
            <button>SEE PRODUCT</button>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="headphones">
          <p>headphone</p>
        </div>
        <div className="speakers">
          <p>speaker</p>
        </div>
        <div className="earphones">
          <p>earphone</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
