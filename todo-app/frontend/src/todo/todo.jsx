import React, { Component } from "react"
import axios from 'axios'

import PageHeader from "../template/pageHeader"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
            
        this.handleAdd = this.handleAdd.bind(this)
        this.handleMaskAsDone = this.handleMaskAsDone.bind(this)
        this.handleMaskAsPending = this.handleMaskAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }
    
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp=>(this.refresh(this.state.description)))
    }

    handleMaskAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:true})
            .then(resp=>(this.refresh(this.state.description)))
    }

    handleMaskAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:false})
            .then(resp=>(this.refresh(this.state.description)))
    }

    handleClear(){
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch} 
                    handleClear={this.handleClear}
                    />
                <TodoList 
                    list={this.state.list}
                    handleMaskAsDone={this.handleMaskAsDone}
                    handleMaskAsPending={this.handleMaskAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}