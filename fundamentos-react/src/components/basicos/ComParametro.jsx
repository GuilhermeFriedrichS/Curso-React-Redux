import React from 'react';

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota);
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong> {props.subtitulo} </strong>
                tem nota
                <strong> {notaInt} </strong>
                <strong> {status} </strong> !
            </p>
        </div>
    )

}