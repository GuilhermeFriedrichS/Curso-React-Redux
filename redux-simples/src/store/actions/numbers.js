// Action Creator
export function changeNumberMin (newNumber) {
    return {
        type: 'NUM_MIN_CHANGED',
        payload: newNumber
    }
}