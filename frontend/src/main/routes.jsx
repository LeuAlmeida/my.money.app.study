import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Clients from '../clients/clients'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path ='/billingCycles' component={BillingCycle} />
        <Route path ='/clients' component={Clients} />
        <Redirect from='*' to='/' />
    </Router>
)