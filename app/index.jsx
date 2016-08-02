import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ga from 'react-ga';

import Styles from './scss/styles.scss';

// Components
import App from './components/App.jsx';

ga.initialize('UA-77647623-1');

function logPageView() {
    ga.pageview(window.location.pathname);
}

render((
    <Router history={browserHistory} onUpdate={logPageView}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app'));
