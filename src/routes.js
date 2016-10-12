import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/App';
import IndexPage from './components/Index';
import DetailsPage from './components/Details';


export default (
    <Route path="/" component={App}>
        <IndexRedirect to="/cities" />
        <Route path="/cities" component={IndexPage} />
        <Route path="/cities/:cityId" component={DetailsPage} />
    </Route>
);
