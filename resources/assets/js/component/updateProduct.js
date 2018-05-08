import React, {Component} from 'react'

class UpdateProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            product: null
        }
    }

    onUpdate(){
        let l={
            title: "Dr.", 
            description: "Expedita quam itaque debitis saepe. Rerum temporib…one. Non error quibusdam at quasi necessitatibus.",
            price: 25,
            availability:1
        };
        this.props.handleUpdate(l);
    }


    render(){
        if(!this.props.product){
            return (
                <div> Seleccione un producto para actualizarlo </div>
            )
        }

        return (
            <div onClick={this.props.onUpdate}> llego el componente </div>
        )

    }
}

export default UpdateProduct;