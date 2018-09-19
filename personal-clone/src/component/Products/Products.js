import React from 'react'

export default function Products(props){
    const {name, price, image} = props
    return (
        <div>
        <img src={image} alt=""/>
        <p>{name}</p>
        <p>{price}</p>
        </div>
    )
}

