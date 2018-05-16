import React, {Component} from 'react'

class UpdateProduct extends Component{
    constructor(props){
        super(props);
        /** inicializamos el estado */
        this.state={
            newProduct:{
                title: '',
                description:'',
                price:0,
                availability: 0,
            }
        }
        //Boilerplate code for binding methods with `this`
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    }
    /**Este metodo dinamicamente acepta inputs y los guarda en el stado */
    handleInput(key, e){
        /** Duplicando y actualizando el stado */
        var state = Object.assign({}, this.state.newProduct);
        state[key]= e.target.value;
        this.setState({newProduct: state});
    }

    /** este metodo es invocado cuando se preciona el boton submit */
    handleSubmit(e){
        //preventDefault previene que la pagina se recargue
        e.preventDefault();
        /**un call back a onAdd props. el stado
         *  actual es pasado como parametro
         */
        this.props.onUpdate(this.state.newProduct);
    }

    render(){
        return (
            <div>
                <h2>Actualizar producto</h2>
                <div>
                     <form onSubmit={this.handleSubmit}>
                        <label> Titulo :
                          <input type="text" onChange={(e)=>this.handleInput('title', e)} />
                        </label>
                        <meta name="csrf-token" content="{{ csrf_token() }}" />

                        <label> Descripcion:
                          <input type="text" onChange={(e)=>this.handleInput('description', e)}  />
                        </label>

                        <label> Precio:
                          <input type="text" onChange={(e)=>this.handleInput('price', e)} />
                        </label>

                        <label> Availability:
                          <input type="text" onChange={(e)=>this.handleInput('availability', e)} />
                        </label>
                        <input type="submit" value="Submit" />
                     </form>
                </div>
            </div>
        )
        }
}
export default UpdateProduct;