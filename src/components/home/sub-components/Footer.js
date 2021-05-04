import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <footer>
      <div className="items">
        <div className="block" />
        <div className="contents">
          <p>audiophile</p>
          <ul>
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>HEADPHONES</a>
            </li>
            <li>
              <a>SPEAKERS</a>
            </li>
            <li>
              <a>EARPHONES</a>
            </li>
          </ul>
          <p className="paragraph">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex">
            <p className="same">Copyright 2021. All Rights Reserved</p>
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
