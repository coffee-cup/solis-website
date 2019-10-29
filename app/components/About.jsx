import React, { Component } from "react";

import Background from "./Background.jsx";
import Footer from "./Footer.jsx";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Background />
        <div className="mw100 m0 grid-centered relative">
          <div className="center-vertical full gutter-small col-4_lg_6_md_4_sm_8_sx_12">
            <div className="about white pt2 pb2 mw100 radius">
              <h2 className="about-header dark-header">About Solis</h2>
              <p className="about-copy dark-body">Where are you going?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
