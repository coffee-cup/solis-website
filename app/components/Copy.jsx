import React, { Component } from 'react';

// <div className="head-copy col-12_xs-12">
//                     <p className="mb0 f-headline">Solis</p>
//                     <p className="f3">sunrise, sunset, and twilight time tracker</p>
//                 </div>

import Phone from './Phone.jsx';
import Features from './Features.jsx';

class Copy extends Component {
    render() {
        return (
            <div className="copy grid-centered">
                <div className="header col-6_md-8_xs-12 full center-vertical">
                    <div className="gutter-small centered-group">
                        <h1 className="head-title mb0 mt0 f-headline">
                            Solis
                        </h1>
                        <p className="head-body f3">
                            sunrise, sunset, and twilight time tracker
                        </p>
                    </div>
                </div>

                <div className="mobile-phone">

                </div>

                <Features />
            </div>
        );
    }
}

export default Copy;
