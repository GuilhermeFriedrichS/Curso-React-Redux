import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Sum (props) {
    const {min, max} = props
    return (
        <Card title="Soma de Números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min+max}</strong>
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

export default connect(mapStateToProps)(Sum)