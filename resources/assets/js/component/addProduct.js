import React, {Component} from 'react'

class AddProduct extends Component{
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
        this.props.onAdd(this.state.newProduct);
    }

    render(){
        return (
            <div>
                <h2>Crear nuevo producto</h2>
                <div>
                     <form onSubmit={this.handleSubmit} className="row">

                        <div className="col-md-3">
                            <label> Titulo : </label>
                            <input type="text" className="form-control" onChange={(e)=>this.handleInput('title', e)} />
                        </div>
                        <div className="col-md-3">
                            <label> Descripcion: </label>                        
                            <input type="text" className="form-control" onChange={(e)=>this.handleInput('description', e)}  />
                        </div>
                        <div className="col-md-3">
                            <label> Precio:</label>
                            <input type="text" className="form-control" onChange={(e)=>this.handleInput('price', e)} />
                        </div>
                        <div className="col-md-3">
                            <label> Availability: </label>             
                            <input type="text" className="form-control" onChange={(e)=>this.handleInput('availability', e)} />       
                        </div>
                        <input className="btn btn-primary ml-3 mt-2" type="submit" value="Guardar" />
                     </form>
                </div>
            </div>
        )
        }
}
export default AddProduct;