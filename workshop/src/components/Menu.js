import React,{Component} from 'react';

class Menu extends Component{
    
    render(){
        console.log(this.props, 'props')
        const comidas = this.props.menu.filter(comida => {
            return comida.meal === this.props.meal;
          }).map((comida, i) => {
            return (
              <div className="col-md-4" key={comida.product}>
              <div onClick={()=>this.props.addItem(comida)} className="btn btn-warning card-mt-4 card-header">
                <h3>{comida.product}
                <span className="badge badge-pill badge-danger ml-1">
                <p>${comida.price}.00</p>
                </span>
                </h3>
                
              </div>
              </div>
            )
          });
        return(
            <div>
                {comidas}
            </div>
            
        )
    }
}

export default Menu;