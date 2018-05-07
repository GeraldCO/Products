import React, {Component } from 'react';

/** Stateless component o componente puro
 * 
 */

 const Product = ({product})=>{

    const divStyle = {
        background:'red'
    }

    if(!product){
        return(
            <div style={divStyle} > Producto no existe </div>
        )
    }
    return (
        <div style={divStyle}>
            <h2> {product.title} </h2>
            <p> {product.description} </p>
            <h3> Status {product.availability ? 'Avaible' : 'Out of stock'} </h3>
            <h3> Price: {product.price} </h3>
        </div>
    )
 }
export default Product;