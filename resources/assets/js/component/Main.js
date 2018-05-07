import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Product from './Product'
import AddProduct from './AddProduct'
var $ = require ('jquery');

class Main extends Component{
    constructor(){
        super();
        //inicializamos los stados en el contructor
        this.state={
            products:[],
            currentProduct: null
        }
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

    handleAddProduct(product){
        product.price = Number(product.price);

        $.ajaxSetup({
            url: "/api/products/",
            data: product,
            async: true,
            dataType: 'json',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            beforeSend: function () {
            },
            complete: function(){
            }
        });
        $.post()
        .done(function(response) {
            console.log(response);
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
                    <h3>All products</h3>
                    <ul>
                        {this.renderProducts()}
                    </ul> 
                 </div>
                 <Product product={this.state.currentProduct} />
                 <AddProduct onAdd={this.handleAddProduct} />
             </div>     
         );
       }
     }

export default Main;
if (document.getElementById('root')){
    ReactDOM.render(<Main/>, document.getElementById('root'));
}