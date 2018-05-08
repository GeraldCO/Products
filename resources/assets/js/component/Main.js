import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Product from './Product'
import AddProduct from './AddProduct'
import Update from './updateProduct'
var $ = require ('jquery');

class Main extends Component{
    constructor(){
        super();
        //inicializamos los stados en el contructor
        this.state={
            products:[],
            currentProduct: null
        }
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.callbackFuncWithData = this.callbackFuncWithData.bind(this);
    }

    /* componentDidMount es un metodo del ciclo de vida que se llama despues que el componente es montado*/
    componentDidMount(){
         $.getJSON(
            '/api/products', 
            (data) => { 
                this.setState({
                    products: data
                }
                );
        }
        );
     }

    renderProducts(){
        return this.state.products.map( product => {
                return (
                    /* caundo usamos listas siempre debemos especificar una llave (key) unica para cada componente*/
                    <li key={product.id} onClick={()=>this.handleClick(product)}>
                        { product.title }
                    </li>
                );
        });
    }

    handleClick(product){
        this.setState({
            currentProduct: product
        });
    }

    handleDelete(){
        const currentProduct = this.state.currentProduct;
        fetch( 'api/products/' + this.state.currentProduct.id, 
        { method: 'delete' })
        .then(response => {
          /* Duplicate the array and filter out the item to be deleted */
          var array = this.state.products.filter(function(item) { //recorre los productos y como parametro se pasa una funcion que devuelve el array sin el current product
          return item !== currentProduct
        });
    
        this.setState({ products: array, currentProduct: null});
    });

    }

    callbackFuncWithData(data)
    {
    console.log(data);
    }

    handleUpdate(product) {
        const currentProduct = this.state.currentProduct;
        var productosget;
        $.getJSON('/api/products/1', this.callbackFuncWithData);
        console.log(this.state.productoget);

        fetch( 'api/products/'+this.state.currentProduct.id, {
            method:'put',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
        .then(response => {
            return response.json();
        })
        .then( data => {
            /* Updating the state */
            var array = this.state.products.filter(function(item) {
              return item !== currentProduct
          })
            this.setState((prevState)=> ({
                products: array.concat(product),
                currentProduct : product
            }))
        }) 
      }

    handleAddProduct(product){
        product.price = Number(product.price);
        $.ajaxSetup({
            url: "/api/products/",
            data: product,
            async: true,
            dataType: 'json',
            beforeSend: function () {
            },
            complete: function(){
            }
        });
        $.post()
        .done(response => {
            this.setState((prevState)=> ({
                products: prevState.products.concat(response),
                currentProduct : response
            }));
        })
        .fail(function() {
            console.log('failed');
        })
      
      }

    render() {
        /* Some css code has been removed for brevity */
        return (
             <div>
                 <input type="button" onClick={this.handleUpdate} value="actualizar"  />
                 <div>
                    <h3 onClick={this.handleUpdate}>All products </h3>
                    <ul>
                        {this.renderProducts()}
                    </ul> 
                 </div>
                 <Product handleDelete={this.handleDelete} product={this.state.currentProduct} />
                 <Update product={this.state.currentProduct} onUpdate={this.handleUpdate} />
                 <AddProduct onAdd={this.handleAddProduct} onUpdate={this.handleUpdate} currentProduct={this.state.currentProduct} />
             </div>     
         );
       }
     }

export default Main;
if (document.getElementById('root')){
    ReactDOM.render(<Main/>, document.getElementById('root'));
}