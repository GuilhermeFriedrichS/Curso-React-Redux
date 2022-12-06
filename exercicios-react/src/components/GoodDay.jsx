import React from "react"

export default props => [ 
    <h1 key='h2'>Bom dia {props.name}!</h1>,
    <h2 key='h2'>Até breve</h2>
]

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.name}!</h1>
//         <h2>Até breve</h2>
//     </React.Fragment>

// export default props => 
//     <div>
//         <h1>Bom dia {props.name}!</h1>
//         <h2>Até breve</h2>
//     </div>