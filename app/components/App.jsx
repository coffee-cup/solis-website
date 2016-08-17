import React, { Component } from 'react';

import Cover from './Cover.jsx';
import Copy from './Copy.jsx';
import Phone from './Phone.jsx';
import Footer from './Footer.jsx';

class App extends Component {
    render() {
        return (
            <div className="main">
                <div className="background"></div>
                <div className="grid relative">
                    <div className="pb0 full white-back col-7_sm-12">
                        <Copy />
                        <Footer />
                    </div>
                    <div className="side-phone grid">
                        <Phone className="col-6" data-push-left="off-6" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

