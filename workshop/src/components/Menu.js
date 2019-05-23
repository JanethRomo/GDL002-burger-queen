import React from 'react';

const Menu = (props) => {
        console.log(props, 'props')
        const comidas = props.menu.filter(comida => {
            return comida.meal === props.meal;
          }).map((comida, i) => {
            return (
              <div className="col-md-4" key={comida.product}>
                <section onClick={()=> props.addItem(comida)} className="btn btn-warning card-mt-4 card-header">
                    <h3>{comida.product}</h3> 
                    <p className="badge badge-pill badge-danger ml-1"> ${comida.price}.00</p>                    
                </section>
              </div>
            )
          });
        return(
            <div>
                {comidas}
            </div>
            
    )
}

export default Menu;