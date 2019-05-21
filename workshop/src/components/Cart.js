import React,{Component} from 'react';
import comidas from '../desayunos';

class Cart extends Component{
    
    render(){
        console.log(this.props)
        let total = 0;
        let totalCuenta = this.props.cart.map((element, i) => {
            return (
            <div key={i}>
            <p>{element.product}</p>
            <p>{element.price}</p>
        
            </div>)
          })
          const totalSuma = this.props.cart.reduce(function (product, price) {
            return product + price.price;
          }, 0);
        return(
            
        <div>
            {totalCuenta}
        <p>total:{totalSuma}</p>
            </div>
        )
    }
}

export default Cart;