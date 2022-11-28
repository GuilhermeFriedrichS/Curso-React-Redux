import React from "react"
import { Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import AuthOrApp from "./authOrApp"
import Dashbord from "../dashbord2/dashbord2"
import BillingCycle from "../billingCycle/billingCycle"

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashbord}/>
        <Route path='billingCycles' component={BillingCycle}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)