import React from "react"

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
             ...props, ...child.props 
        }) /* Clona o elemento (props.children) e adiciona as propriedades do segundo parametro */
    })
}