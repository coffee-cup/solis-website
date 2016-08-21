import React, { Component } from 'react';

import Background from './Background.jsx';
import Copy from './Copy.jsx';
import Footer from './Footer.jsx';

class App extends Component {
    render() {
        return (
            <div className="main">
                <Background />
                <div className="mw100 m0 grid relative">
                    <div className="pb0 full white-back col-7_sm-12">
                        <Copy />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

