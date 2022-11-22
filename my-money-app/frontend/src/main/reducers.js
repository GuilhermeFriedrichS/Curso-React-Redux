import {combineReducers} from 'redux'

import DashbordReducer from '../dashbord/dashbordReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashbord: DashbordReducer,
    tab: TabReducer
})

export default rootReducer 