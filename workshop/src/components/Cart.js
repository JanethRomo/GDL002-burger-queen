import React,{Component} from 'react';

class Cart extends Component{ // este componente es la parte clave para la comanda
    
    render(){ //
        console.log(this.props)//informacion guardada en props mostrada en consola
         let totalCuenta = this.props.cart.map((element,i) => { // se hace una funcion para traer la informacion que esta en props y utilizarla en cart y con map revisa los items de cada elemento
          return(
              //como toda funcion debe de retornar algo y debe de aparecer en pantalla
              //Dentro de divs va la info de react en donde por medio de parrafos se muestra la informacion que se pinta en pantalla
            <div key={i}>
        <p>{element.product}</p>

        <p>{element.price}</p>
        <div>
        <button onClick={()=>this.props.removeItem(element)} className="badge badge-pill badge-warning ml-1">Eliminar</button>
        </div>
            </div>)
         })
          //para hacer la suma de los productos se utilizo un metodo de suma de arreglos llamado reduce
    
        const totalSuma = this.props.cart.reduce(function(product,price){// usa la informacion que tiene en comidas se la pasa a cart y se usa el metodo reduce mediante su funcionque tiene como parametros producto y precio
            return product + price.price;   //retorna el acumulador (producto) + precio del producto seleccionado + el precio del 2do
        },0);//0;
    
//pinta en parrafos la informacion del total de la cuenta y la suma
       return (


           <div>
            {totalCuenta}

 <p>total:{totalSuma}</p>
           </div> 
        
          
          
            
          
        )
            
    }
}
export default Cart;