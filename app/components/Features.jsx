import React, { Component } from 'react';

import Feature from './Feature.jsx';

const features = [
    {
        title: 'Notifications',
        body: 'Toggle notifications for sunrise, sunset, first light, and last night. Know exactly what time of day you can expect it to be light and dark out. ☀️ 🌙',
        icon: 'icon-bell',
    }, {
        title: 'Any City',
        body: 'See when the sun sets and rises for your friends around the world. 🌎 🌏 🌍',
        icon: 'icon-city',
    }, {
        title: 'Golden/Blue Hours',
        body: 'The best light for photography occurs right before and after sunrise and sunset. Solis cleary shows you when these times are so you never miss the perfect shot. 📸',
        icon: 'icon-golden',
    }, {
        title: 'Widget',
        body: 'Simple today widget to know at a glance when the next sun event is. 👌',
        icon: 'icon-widget',
    }, {
        title: 'Works Offline',
        body: 'Locations and timezones are cached for seamless use without a network connection. ⛺️',
        icon: 'icon-offline',
    },
];

class Features extends Component {
    render() {
        return (
            <div className="features gutter-small col-12 grid">
                {features.map(function(feature) {
                    return <Feature key={feature.title} {...feature} />;
                })}
            </div>
        );
    }
}

export default Features;
