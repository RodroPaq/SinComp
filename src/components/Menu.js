import React from 'react';
import Productos from './Productos'

const Menu = ({menu}) => {    
    return (  
        <div className="row mt-2 mb-5 mt-5">
            <div className="tab-content col-12" id="nav-tabContent">                
                {menu.map((i,k) => {
                   return(<Productos menu={i.Subcategorias} categoria={i.Nombre} key={k} dk={k}/>)
                })}                                 
            </div>
        </div>
    );
}
 
export default Menu;