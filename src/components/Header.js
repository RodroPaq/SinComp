import React from 'react';

const Header = ({menu,empresa}) => {   
    return (  
        <div className="nav-scroller fixed-top shadow-lg bg-4B4453">
            <nav className="nav nav-underline">
            {empresa.Imagen !== null ?
            <img src={"Imagenes/" + empresa.Imagen} width="5%" className="d-inline-block align-top img-responsive ml-3 mt-1" alt="" />
            :
            <span className="nav-link active text-info" >{empresa.Nombre}</span>            
            }
            {menu.map((i,k) => {
               let titulo = i.Nombre.replace(/ /g, "-");
               let activeClass = (k === 0 ? "nav-link text-white active" : "nav-link text-white" );
               return (<a className={activeClass} href={"#" + titulo} id={titulo + "-tab"} key={k}  data-toggle="tab" role="tab" aria-controls={titulo} aria-selected="true">{i.Nombre}</a>)               
            })}
             
            </nav>
        </div>
    );
}
 
export default Header;