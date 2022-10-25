import React from "react";
import If from "./If";

export default props => {
    const usuario = props.usuario || {}
    return(
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem Vindo <strong>{ props.usuario.nome }</strong>! 
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja Bem Vindo <strong>Amigão</strong>! 
            </If>

            {/* <If test={usuario && usuario.nome}>
                Seja Bem Vindo <strong>{ props.usuario.nome }</strong>! 
                <Else>
                    Seja Bem Vindo <strong>Amigão</strong>! 
                </Else>
            </If> */}
            
               
           
        </div>
    )
}