import React from "react"
import { Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import App from './app'
import Dashbord from "../dashbord2/dashbord2"
import BillingCycle from "../billingCycle/billingCycle"

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashbord}/>
        <Route path='billingCycles' component={BillingCycle}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)