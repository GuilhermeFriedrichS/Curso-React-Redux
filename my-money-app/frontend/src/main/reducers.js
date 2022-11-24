import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from "react-redux-toastr";

import DashbordReducer from '../dashbord/dashbordReducer'
import TabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'


const rootReducer = combineReducers({
    dashbord: DashbordReducer,
    tab: TabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer 