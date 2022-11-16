import React from 'react'

import Card from './Card'

export default props => {
    const { min, max } = props
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