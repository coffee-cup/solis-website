import React, { Component } from 'react';
import { default as Video } from 'react-html5video';

class Phone extends Component {
    render() {
        return (
            <div className="phone-video center-vertical-not-small">
                <div className="phone-container">
                    <div className="phone-model">
                        <Video autoPlay loop muted
                        poster="/phone-screen.png"
                        onCanPlayThrough={() => {
                            // Do stuff
                        }}>
                        <source src="/phone.mov" type="video/webm" />
                        </Video>
                    </div>
                </div>
            </div>
        );
    }
}

// <div className="phone-image center-vertical">
//             </div>

// <video>
//     <source src=""
//     <img srcSet={phoneImage} className="phone-screen animated fadeIn" />
// </video>

export default Phone;
