import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Product from './Product'
import AddProduct from './AddProduct'
import Update from './updateProduct'
var $ = require ('jquery');
//import Modal from './modal'

class Main extends Component{
    constructor(){
        super();
        //inicializamos los stados en el contructor
        this.state={
            products:[],
            currentProduct: null,
            showUpdate:false
        }
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.showUpdate = this.showUpdate.bind(this);
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

    showUpdate(){
        $("#exampleModal").modal();
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

    handleUpdate(product) {
        const currentProduct = this.state.currentProduct;
        $.ajax({
            type: 'PUT', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
            dataType: 'json', // Set datatype - affects Accept header
            url: "/api/products/"+ currentProduct.id, // A valid URL
            headers: {"X-HTTP-Method-Override": "PUT"}, // X-HTTP-Method-Override set to PUT.
            data: product, // Some data e.g. Valid JSON as a string
            success: (data)=>{
                    /* Updating the state */
                    let products=this.state.products;
                    products= products.map( el => (
                        el.id===data.id ? { ...el, 
                            title:data.title, 
                            description:data.description, 
                            price:data.price, 
                            availability : data.availability  } : el
                    ));

                   this.setState({ 
                        products,
                        currentProduct: data
                });

                    
            },
            error: ()=>{
                console.log('ha ocurrido un error');
            }
        });

       
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
                 <div>
                    <h3> All products </h3>
                    <ul>
                        {this.renderProducts()}
                    </ul> 
                 </div>
                <Product
                    showUpdate={this.showUpdate} 
                    handleUpdate={this.handleUpdate} 
                    handleDelete={this.handleDelete} 
                    product={this.state.currentProduct} 
                />
                <AddProduct 
                    onAdd={this.handleAddProduct} 
                    currentProduct={this.state.currentProduct} 
                />
                 
             </div>     
         );
       }
     }

export default Main;
if (document.getElementById('root')){
    ReactDOM.render(<Main/>, document.getElementById('root'));
}