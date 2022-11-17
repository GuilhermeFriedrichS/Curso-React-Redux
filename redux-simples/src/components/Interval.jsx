import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { changeNumberMin } from '../store/actions/numbers'

function Interval (props) {
    const {min, max} = props
    props.changeMin(10000)
    return (
        <Card title="Intervalo de Números" red>
            <div className='Interval'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} readOnly/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        changeMin(newNumber) {
            const action = changeNumberMin(newNumber)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, 
    mapActionCreatorToProps
)(Interval)