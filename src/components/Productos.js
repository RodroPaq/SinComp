import React, { Fragment } from 'react';
import Items from './Items'



const Productos = ({menu,categoria,dk}) => {    
    let titulo = categoria.replace(/ /g, "-");
    let activeClass = (dk === 0 ? "tab-pane fade active col-12 show" : "tab-pane fade col-12" );
    return (        
        <Fragment>        
        <div className={activeClass} id={titulo} role="tabpanel" aria-labelledby="nav-home-tab">            
        <h1 className="display-6 border-bottom pb-2 mb-2 mt-3">{categoria}</h1>
            <ul className="list-group list-group-flush">
                {menu.map( (i,k) => {                    
                    return(
                        <Fragment> 
                        <li className="list-group-item" key={k}>
                            <div className="row">
                                <div className="col-7 col-md-8 col-lg-8">
                                        <h5>{i.Nombre}</h5>
                                </div>
                            </div>
                        </li>
                        <Items menu={i.Productos} />
                        </Fragment>
                    )
                })}
            </ul>
        </div>
        </Fragment>
    );
}

export default Productos;