import React, { Component } from 'react';

import phoneImage from '../images/phone.png';

class Phone extends Component {
    render() {
        return (
            <div className="phone-image center-vertical">
                <img srcSet={phoneImage} className="phone-screen animated fadeIn" />
            </div>
        );
    }
}

export default Phone;
