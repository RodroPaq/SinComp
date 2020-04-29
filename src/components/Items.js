import React, { Fragment } from 'react';



const Items = ({menu}) => {        
    return (        
        <Fragment>                
                {menu.map( (i,k) => {                    
                    return(
                        <li className="list-group-item" key={k}>
                            <div className="row pl-3">
                                <div className="col-7 col-md-8 col-lg-8">
                                        <h6>{i.Nombre}</h6>
                                        {i.Descripcion != null ? <small className="text-secondary font-italic">{i.Descripcion}</small> : null}
                                </div>
                                <div className="col-5 col-md-4 col-lg-4 text-right">
                                    <span className="badge badge-light text-right p-1">$ {i.Valor.toFixed(2)}</span>
                                </div>
                            </div>
                        </li>
                    )
                })}            
        </Fragment>
    );
}

export default Items;