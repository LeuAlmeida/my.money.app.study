import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

// import AuthOrApp from './authOrApp'
import App from './app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Clients from '../clients/clients'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}> {/*Anterior: component=AuthOrApp*/}
            <IndexRoute component={Dashboard} />
            <Route path ='billingCycles' component={BillingCycle} />
            <Route path ='clients' component={Clients} />
        </Route>
            <Redirect from='*' to='/' />
    </Router>
)