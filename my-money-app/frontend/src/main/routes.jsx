import React from "react"
import { Switch, Route, Redirect } from "react-router"

import AuthOrApp from "./authOrApp"
import Dashbord from "../dashbord2/dashbord2"
import BillingCycle from "../billingCycle/billingCycle"

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashbord} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)