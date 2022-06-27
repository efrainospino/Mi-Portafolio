import React from 'react';
import './About.css';
import foto from '../../media/Foto hoja de vida.jpeg';

const about = () => {
  return (
    <section className='container mt-lg-5 pt-lg-5' id='about'>
        <div className="row">
            <div className='col-1 col-md-1 p-0 m-0'></div>
            <div className="col-8 col-md-4 p-5 ms-sm-5">
                <h2 className='typetext'>
                    <span
                    className='span maquina fs-4'>
                        01.
                    </span>
                        &nbsp;Sobre mí
                </h2>
                <p className='pclass'>Soy una persona autodidacta, con
                    facilidad y disposición para aprender,
                    adaptarme y trabajar en equipo, así como
                    para resolver problemas de manera
                    eficiente y con liderazgo.
                </p>
            </div>
            <div className='col-8 col-md-3 mx-auto ps-5 ms-sm-5'>
                <div className="contenedor">
                    <img src={foto} alt="Efrain Ospino" />
                    <div className="capa"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about
