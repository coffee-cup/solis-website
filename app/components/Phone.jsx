import React, { Component } from 'react';
import { default as Video } from 'react-html5video';

class Phone extends Component {
    constructor() {
        super();
        setTimeout(function() {
            var video = document.getElementsByClassName('video__el')[0];
            video.play();
        }, 5000);
    }

    render() {
        return (
            <div className="phone-video center-vertical-not-small">
                <div className="phone-container">
                    <div className="phone-model">
                        <Video loop muted
                        poster="/phone-screen.png"
                        onCanPlayThrough={() => {
                            // Do stuff
                        }}>
                        <source src="/phone.mp4" type="video/mp4" />
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
