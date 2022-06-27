import React from 'react';

import Nav from './Components/nav/Nav';
import Cover from './Components/cover/Cover';
import About from './Components/about/About';
import Proyectos from './Components/proyectos/Proyectos';
import Footer from './Components/footer/Footer';
import Preloader from './Components/preloader/Preloader';

import './App.css';

const App = () => {  

 // Carga de inicio (Loader)

  window.addEventListener('load', () => {

    setTimeout(carga, 500);

    function carga(){
      document.getElementById('preloader').className = 'ocultar-main';

      document.getElementById ('main-content').className = '';

    }

  })

  return (
    <>
        <div id='preloader'>
            <Preloader/> 
        </div>
        <div className='ocultar-main' id='main-content'>
            <Nav/>
            <Cover/>
            <About/> 
            <Proyectos/>
            <Footer/>
        </div>    
    </>
  )
}

export default App