import React, {Component } from 'react';

/** Stateless component o componente puro
 * 
 */

 const Product = (props)=>{

    

    if(!props.product){
        return(
            <div className="card" > 
                <div className="card-header">
                    <p className="card-text">Selecciona un producto</p>
                </div>
            </div>
        )
    }
    return (
        <div className="card" >
            <div className="card-header">
            <h2 className="card-title" > {props.product.title} </h2>
            </div>
            <div className="card-body" > 
                <p className="card-text"> {props.product.description} </p>
                <p className="card-text"> Status: {props.product.availability ? 'Avaible' : 'Out of stock'} </p>
                <p className="card-text"> Price: {props.product.price} </p>
                <div>
                    <button type="button" onClick={props.handleDelete} className="btn btn-danger">
                        Eliminar 
                    </button>
                    <button type="button" className="btn btn-primary ml-3" data-toggle="modal" data-target="#exampleModal">
                        Actualizar
                    </button>
                </div>
                
            </div>
            
        </div>
    )
 }
export default Product;