import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from "react-redux-toastr";

import DashbordReducer from '../dashbord/dashbordReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer';


const rootReducer = combineReducers({
    dashbord: DashbordReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer 