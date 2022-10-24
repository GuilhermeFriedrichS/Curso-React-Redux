import React from 'react';

export default props => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max-min)) + min;

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {props.min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {props.max}
            </p>
            <p>
                <strong>Valor escolhido: </strong> {aleatorio}
            </p>
        </div>
    );

};
