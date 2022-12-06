import React from 'react'
import ReactDom from 'react-dom'

import Dad from './components/Dad'
import Child from './components/Child'

ReactDom.render(
    <div>
        <Dad name="Paulo" lastName="Silva">
            <Child name="Pedro" />
            <Child name="Paulo" />
            <Child name="Carla" />
        </Dad>
    </div>
, document.getElementById('root'))