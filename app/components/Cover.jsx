import React, { Component } from 'react';

import Phone from './Phone.jsx';

const features = [
    { text: 'Beautiful gradient interface' },
    { text: 'Know when it gets dark in any city' },
    { text: 'Notifications for sunrise, sunset, first, and last light' },
    { text: 'Golden and blue hour indicators' },
    { text: 'Works Offline' },
];

class Cover extends Component {
    constructor() {
        super();

        this.state = {
            features,
        };
    }

    render() {
        return (
            <div className="header grid-12-centered">
                <div className="col-8_lg-8_md-10_sm-10_xs-12 grid">
                    <div className="head-copy col-8_sm-12 animated fadeInLeft">
                        <h1 className="f-headline mb0">Solis</h1>
                        <p className="mt0 f3">sunrise, sunset, and twilight time tracker</p>
                        <ul className="features">
                            {features.map(function(feature) {
                                return <li>{feature.text}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="head-image col-4_sm-12">
                        <Phone />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cover;
