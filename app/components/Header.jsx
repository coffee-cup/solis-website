import React, { Component } from 'react';

import Phone from '../images/phone.png';

class Header extends Component {
    render() {
        return (
            <header className="grid-12-centered">
                <div className="col-8_lg-8_md-10_sm-10_xs-12 grid">
                    <div className="head-copy col-8_sm-12 animated fadeInLeft">
                        <h1 className="f-headline mb0">Solis</h1>
                        <p className="mt0 f3">sunrise, sunset, and twilight time tracker</p>
                    </div>
                    <div className="head-image col-4_sm-12">
                        <img srcSet={Phone} className="phone-screen animated fadeIn" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
