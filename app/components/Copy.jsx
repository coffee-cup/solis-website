import React, { Component } from "react";

import Phone from "./Phone.jsx";
import Features from "./Features.jsx";

import Badge from "../assets/Download_on_the_App_Store_Badge.svg";

class Copy extends Component {
  render() {
    return (
      <div className="copy grid-centered">
        <div className="header col-7_md-8_sm-10_xs-12 full center-vertical">
          <div className="gutter-small head-centered-group">
            <h1 className="head-title mb0 mt0 f-headline">Solis</h1>
            <p className="head-body f3">
              sunrise, sunset, and twilight time tracker
            </p>
            <a href="https://itunes.apple.com/us/app/solis/id1129119591?mt=8">
              <img srcSet={Badge} className="app-store-badge" />
            </a>
          </div>
        </div>

        <Phone />

        <Features />

        <div className="twitter white-small gutter-small mt0 pt1 col-7_md-8_sm-10_xs-12">
          <p>
            Find me on Twitter <span className="icon-twitter" />{" "}
            <a href="https://twitter.com/solis_app">@solis_app</a> for support
            and important updates.
          </p>
        </div>
      </div>
    );
  }
}

export default Copy;
