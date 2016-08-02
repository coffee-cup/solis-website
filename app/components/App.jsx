import React, { Component } from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="main">
                    <Header />
                    <div className="grid-centered">

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;

