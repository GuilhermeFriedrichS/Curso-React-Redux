import axios from "axios"

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = (description) => {
    return (dispath, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispath({type:'TODO_SEARCHED', payload: resp.data}))
    }
}

export const add = (description) => {
    return dispath => {
        axios.post(URL, {description})
            .then(resp => dispath(clear()))
            .then(resp => dispath(search()))
    }
}

export const markAsDone = (todo) => {
    return dispath => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done:true})
            .then(resp => dispath(search()))
    }
}

export const markAsPending = (todo) => {
    return dispath => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done:false})
            .then(resp => dispath(search()))
    }
}

export const remove = (todo) => {
    return dispath => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispath(search()))
    }
}

export const clear = (todo) => {
    return [{ type: 'TODO_CLEAR'}, search()]
}