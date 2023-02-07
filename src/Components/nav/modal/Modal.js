
import React from 'react';

import Nav from '../Nav';
import './modal.css';
import pdf from '../../../media/Efrain ospino - hoja de vida.pdf';

const Modal = () => {

    const {toggle} = Nav;

  return (
    <div className="main typetext">
        <div className="modal fade modal-xl" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Mi Hoja De Vida</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <center>
                            <iframe title='mi documento' loading="lazy" src={pdf}></iframe>
                        </center>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btnmodal" data-bs-dismiss="modal" onClick={() => toggle()}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal