import 'babel-polyfill';

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

import './main.css';

const DOM_APP_EL_ID = 'app';

render(
    <Router history={browserHistory}>
        {routes}
    </Router>,
    document.getElementById(DOM_APP_EL_ID)
);
