
import React, {Component} from 'react';
/*import hamburguesa from './hamburguesa.jpg';// para poner una imagen siempre se importa*/
import './App.css';

import comidas from './desayunos.js';
import Menu from './components/Menu';
import Cart from './components/Cart';

console.log(comidas, 'line7');

class App extends Component {
  constructor() {
    super();
    this.state = {
      comidas: comidas,
      cart: []
    }
  }
  addItem = (item) => {
    let newCart = [...this.state.cart];
    newCart.push(item);
    this.setState({
    cart: newCart
    }, ()=>{console.log(this.state.cart)})

  }
  removeItem = (element,i) => {

  }
  render() {
    let meal = new Date().getHours() < 13 ? 'Desayuno' : 'Comida';/*se usa la api de la hora para diferenciar entre desayunos y comidas*/
    /*let comanda = this.state.cart.map((element, i) => {
      return (
      <div key={i}>
      
      </div>)
    })*/
    return (
    <div className="App">
    <header className="App-header">
        <nav className="navbar navbar-dark bg-dark">
          <h1 className="h1">Desayunos/Comidas</h1>
          <span className="badge badge-pill badge-light ml-4">
        {this.state.comidas.length}
        </span>
        </nav>
        <h1 className="h1">Burger Queen</h1>
        <div className="container">
        <div className="row mt-4">
        </div>
        </div>
        {/*<img src={hamburguesa} className="App-logo" alt="logo 0px" />*/}
      </header>
    <div>
    {/*comanda*/}
    </div>
    <Menu title={meal} menu={this.state.comidas} meal={meal} addItem={this.addItem}/>
    <Cart cart={this.state.cart} removeItem={this.props.removeItem}/>

    </div>

    )
  }
};

export default App;