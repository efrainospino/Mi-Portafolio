import React from 'react';
import './Cover.css';
import Covervideo from '../../media/pexels-pavel-danilyuk-5495784 (1).mp4';


const Cover = () => {
  return (
    <div className='cover-contain fw-bold'>
      <div className='row'>
          <div className="col-10 col-sm-10">
            <video src={Covervideo} autoPlay loop muted></video>
            <div className="row">
              <div className="col-sm-9 margin-cover">
                <h3 className='maquina'>Hola, mi nombre es...</h3>
                <h1 className='typetext h1prin'>Efrain Ospino.</h1>
                <h1 className='typetext h1secon'>Construyo páginas web.</h1>
                <p className='typetext'>Desarrollador | Diseñador | Frontend</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cover