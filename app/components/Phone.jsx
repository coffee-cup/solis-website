import React, { Component } from "react";
import { default as Video } from "react-html5video";

class Phone extends Component {
  constructor() {
    super();

    // Start phone video after 3s giving it some time to load
    setTimeout(function() {
      var video = document.getElementsByClassName("video__el")[0];
      video.play();
    }, 3000);
  }

  render() {
    return (
      <div className="phone-video center-vertical-not-small">
        <div className="phone-container">
          <div className="phone-model">
            <Video
              loop
              muted
              poster="/phone-screen.png"
              onCanPlayThrough={() => {
                // Do stuff
              }}
            >
              <source src="/phone.mp4" type="video/mp4" />
            </Video>
          </div>
        </div>
      </div>
    );
  }
}

export default Phone;
