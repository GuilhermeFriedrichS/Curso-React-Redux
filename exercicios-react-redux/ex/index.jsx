import React from "react"
import ReactDOM from "react-dom"
import { combineReducers, createStore } from "redux"
import { Provider } from "react-redux"

const reducers = combineReducers({
    field: () => ({ value: 'Opa' })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <h1>Olá React</h1>
    </Provider>
, document.getElementById('app'))