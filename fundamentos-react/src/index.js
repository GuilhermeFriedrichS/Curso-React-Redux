import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';

const tag = <strong>Olá React!</strong>

ReactDOM.render(
    <div>
        { tag }
    </div>, 
    document.getElementById('root')
);