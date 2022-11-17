import { createStore, combineReducers } from 'redux'

import numbersReducers from './reducers/numbers'

const reducers = combineReducers ({
    numbers: numbersReducers
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig