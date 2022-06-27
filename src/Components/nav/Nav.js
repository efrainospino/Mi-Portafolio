import React from 'react';

import './nav.css';
import logo from '../../media/Logo2.png';
import { useState } from 'react';
import Modal from './modal/Modal';

// Animacion de scroll
import {Link} from 'react-scroll'; 

export const Nav = () => {

    // usestate modal

    const [active, setactive] = useState(false);

    const toggle = () =>{
        setactive(!active);
    }

    // usestate navbar

    const [navbar,setnavbar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >=80){
            setnavbar(true);
        } else {
            setnavbar(false);
        }
    };

    window.addEventListener('scroll',changeBackground);


    // poder cerrar menu hamburguesa al hacer click en los elementos

    const hidenav = () => {
        document.querySelector('#hide').click();
    }



  return (
    
    <nav className={navbar ? 'navbar active navbar-expand-lg navbar-dark bg-outline sticky-top p-0 maquina' : 'navbar navbar-expand-lg navbar-dark bg-outline sticky-top p-0 maquina' }>
        <div className="container-fluid">
            <a className="navbar-brand" href="https://efrainospino.github.io/Mi-Portafolio/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Logo">
                <img src={logo} width="40px" alt="Logo formulario" />
            </a>
            <button className="navbar-toggler shadow-none btn-responsi" type="button" id='hide' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="about" smooth={true} offset={-30} duration={500} className="nav-link mx-1 mt-1" onClick={()=> hidenav()} aria-current="page">
                            <span className='spancolor'>
                                01.
                            </span>
                             Sobre Mí
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="proyectos" smooth={true} offset={-50} duration={500} className="nav-link mx-1 mt-1" onClick={()=> hidenav()}>
                            <span className='spancolor'>
                                02.
                            </span>
                             Proyectos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="footer" smooth={true} offset={0} duration={500} className="nav-link mx-1 mt-1" onClick={()=> hidenav()}>
                            <span className='spancolor'>
                                03.
                            </span>
                             Contáctame
                        </Link>
                    </li>

        {/* Modal para la hoja de vida  */}

                    <li className="nav-item">
                        <button type='button' className='nav-link mx-1 btn btn-outline btn-sm py-1 my-1 mr-1 ms-auto' onClick={()=> toggle()} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Hoja de vida
                        </button>  
                        <Modal active={active} toggle={toggle}></Modal>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>

                                         
        

    
  )
}





export default Nav
