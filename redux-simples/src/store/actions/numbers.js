// Action Creator
export function changeNumberMin (newNumber) {
    return {
        type: 'NUM_MIN_CHANGED',
        payload: newNumber
    }
}

export function changeNumberMax (newNumber) {
    return {
        type: 'NUM_MAX_CHANGED',
        payload: newNumber
    }
}