import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="grid-12-centered mt0 mb0">
                <div className="col-4_md-8_xs-12 pb0">
                    <p className="mt1 mb1 f4">
                        Made with <span className="heart">&hearts;</span> by <a href='https://jakerunzer.xyz'>jakerunzer</a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
