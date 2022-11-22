import {combineReducers} from 'redux'
import DashbordReducer from '../dashbord/dashbordReducer'

const rootReducer = combineReducers({
    dashbord: DashbordReducer
})

export default rootReducer 