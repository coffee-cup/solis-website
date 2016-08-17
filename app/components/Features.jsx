import React, { Component } from 'react';

import Feature from './Feature.jsx';

const features = [
    {
        title: 'Notifications',
        body: '🌙 Know exactly when sunrise, sunset, first light, and last light happen ☀️',
    }, {
        title: 'Widget',
        body: 'Dead simple today widget to know at a glance when the next sun event is ',
    }, {
        title: 'Golden/Blue Hours',
        body: 'Easily see the times of best light for photography 📸',
    }, {
        title: 'Any City',
        body: '🌍 Check how dark it is for your friends around the world 🌎',
    }, {
        title: 'Works Offline',
        body: 'Cache locations and timezones for seamless use without a network connection ⛺️',
    },
];

class Features extends Component {
    render() {
        return (
            <div className="features gutter-small col-12 grid">
                {features.map(function(feature) {
                    return <Feature key={feature.title} {...feature} />
                })}
            </div>
        );
    }
}

export default Features;
