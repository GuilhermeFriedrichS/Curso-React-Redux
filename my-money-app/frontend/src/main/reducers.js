import {combineReducers} from 'redux'

import DashbordReducer from '../dashbord/dashbordReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashbord: DashbordReducer,
    tab: TabReducer,
    BillingCycle: BillingCycleReducer
})

export default rootReducer 