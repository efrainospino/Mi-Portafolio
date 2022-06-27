import React from 'react';
import './proyectos.css';
import Carrusel from './Carrusel/Carrusel';

export const Proyectos = () => {
  return (
    <div className='mt-5 pt-5 container' id='proyectos'>
        <h3 className='typetext ms-3'>
          <span className='span maquina fs-4'>
            02.
          </span>
            Mis Proyectos
        </h3>
        <hr />
        
        <div className="row">
            <div className="col-sm-12 py-5 mx-auto">
                <Carrusel></Carrusel>
            </div>
        </div>
    </div>
  )
}


export default Proyectos
