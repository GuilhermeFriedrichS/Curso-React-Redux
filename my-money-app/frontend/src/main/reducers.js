import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    dashbord: () => ({summary: {credit: 100, debt:50}})
})

export default rootReducer 