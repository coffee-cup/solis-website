import React, { Component } from "react";

class Feature extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feature col-12 grid-centered">
        <div className="feature-copy col-7_md-8_sm-10_xs-12">
          <h2 className="feature-head f2">
            <span
              className={["feature-icon", this.props.icon].join(" ")}
            ></span>
            {this.props.title}
          </h2>
          <p className="feature-body f4 measure">{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default Feature;
