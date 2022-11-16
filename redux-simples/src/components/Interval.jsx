import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Interval (props) {
    const {min, max} = props
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

export default connect(mapStateToProps)(Interval)