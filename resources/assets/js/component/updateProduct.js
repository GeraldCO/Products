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
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"> Modifica el producto</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="inputNombre" > Nombre: </label>
                                <input type="text" className="form-control" id="inputNombre" onChange={(e)=>this.handleInput('title', e)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputDescripcion" > Descripcion: </label>
                                <input type="text" className="form-control" id="inputDescripcion" onChange={(e)=>this.handleInput('description', e)}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPrecio" > Precio: </label>
                                <input type="text" className="form-control" id="inputPrecio" onChange={(e)=>this.handleInput('price', e)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAvailability"> Disponible: </label>
                                <input type="text" id="inputAvailability" className="form-control" onChange={(e)=>this.handleInput('availability', e)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="form-group">
                            <input type="submit" value="Guardar" />
                            </div>
                        </div>
                    </form>    
                </div>
            </div>
        </div>
        )
        }
}
export default UpdateProduct;