// Tell webpack to bring in styles
import Styles from "./scss/styles.scss";

import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

// Pages
import App from "./components/App.jsx";
import About from "./components/About.jsx";

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("app"),
);
