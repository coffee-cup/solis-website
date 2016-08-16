import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return (
            <div className="feature col-12 grid-centered">
                <div className="feature-copy col-6_md-8_xs-12">
                    <h3 className="feature-head f4">
                        {this.props.title}
                    </h3>
                    <p className="feature-body measure">
                        {this.props.body}
                    </p>
                </div>
            </div>
        );
    }
}

export default Feature;
