import {
    NUM_MIN_CHANGED,
    NUM_MAX_CHANGED
} from '../actions/actionsTypes'

const initialState = {
    min: 1,
    max: 10
}

export default function(state = initialState, action) {

    switch(action.type){
        case NUM_MIN_CHANGED:
            return{
                ...state,
                min: action.payload
            }
        case NUM_MAX_CHANGED:
            return{
                ...state,
                max: action.payload
            }
        default: 
            return state
    }
}