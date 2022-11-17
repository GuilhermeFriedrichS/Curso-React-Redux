import {
    NUM_MIN_CHANGED,
    NUM_MAX_CHANGED
} from './actionsTypes'

// Action Creator
export function changeNumberMin (newNumber) {
    return {
        type: NUM_MIN_CHANGED,
        payload: newNumber
    }
}

export function changeNumberMax (newNumber) {
    return {
        type: NUM_MAX_CHANGED,
        payload: newNumber
    }
}