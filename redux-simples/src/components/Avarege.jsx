import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Media (props) {
    console.log(props)
    const {min, max} = props
    return (
        <Card title="Média de Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media)