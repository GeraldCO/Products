import React, {Component } from 'react';

/** Stateless component o componente puro
 * 
 */

 const Product = (props)=>{

    const divStyle = {
        background:'red'
    }

    if(!props.product){
        return(
            <div style={divStyle} > Producto no existe </div>
        )
    }
    return (
        <div style={divStyle} >
            <h2> {props.product.title} </h2>
            <p> {props.product.description} </p>
            <h3> Status: {props.product.availability ? 'Avaible' : 'Out of stock'} </h3>
            <h3> Price: {props.product.price} </h3>
            <input type="button" value="Eliminar" onClick={props.handleDelete} />
        </div>
    )
 }
export default Product;