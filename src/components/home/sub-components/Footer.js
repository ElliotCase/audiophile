import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <footer>
      <div className="items">
        <div className="block" />
        <div style={{ width: "100%" }} className="flex-xlarge-desktop">
          <div className="contents">
            <div className="flex-desktop">
              <p>audiophile</p>
              <ul className="hide-for-large-desktop">
                <li>
                  <a href="#home">HOME</a>
                </li>
                <li>
                  <a href="#heaphones">HEADPHONES</a>
                </li>
                <li>
                  <a href="#speakers">SPEAKERS</a>
                </li>
                <li>
                  <a href="#earphones">EARPHONES</a>
                </li>
              </ul>
            </div>
            <p className="paragraph">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="flex-tablet">
              <p className="same">Copyright 2021. All Rights Reserved</p>
              <div className="icons hide-for-large-desktop">
                <FacebookIcon className="icon" />
                <TwitterIcon className="icon" />
                <InstagramIcon className="icon" />
              </div>
            </div>
          </div>
          <div className="xlarge hide-for-desktop-down">
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#headphones">HEADPHONES</a>
              </li>
              <li>
                <a href="#speakers">SPEAKERS</a>
              </li>
              <li>
                <a href="#earphones">EARPHONES</a>
              </li>
            </ul>
            <div className="icons">
              <FacebookIcon className="icon" />
              <TwitterIcon className="icon" />
              <InstagramIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
