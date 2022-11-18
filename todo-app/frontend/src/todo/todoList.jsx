import React from "react";
import { connect } from "react-redux"; //Conecta esse componente com os dados do estado
import IconButton from "../template/iconButton";
import { bindActionCreators } from 'redux'

import { markAsDone, markAsPending, remove } from "./todoActions";

const TodoList = props => {

    const renderRows = () =>{
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'maskedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps =  state => ({list: state.todo.list})
const mapDispatchToProps = dispath => 
    bindActionCreators({ markAsDone, markAsPending, remove }, dispath)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)