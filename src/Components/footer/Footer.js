import React from 'react';
import { useRef } from 'react';
import './footer.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';




const Footer = () => {


  // Enviar Email

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1s49qer', 'template_l83ixiy', form.current, 'LfOFaBT7k8SB1IPLb')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mensaje enviado',
            width: 300,
            showConfirmButton: false,
            timer: 1500
          });
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Hubo un error',
            width: 300,
            showConfirmButton: false,
            timer: 1500
          });
      });
  };








  return (
    <div className='mt-5 pt-5 mb-5 container' id='footer'>
        <h3 className='typetext h3 d-flex justify-content-center'>
            <span className="span maquina fs-4">
                03.
            </span>
            Contáctame
        </h3>
        <div className='row mt-5'>
            <div className="col-9 col-sm-5 mx-auto px-0">
              <div className="card card1 p-3 mb-3">
                <div className="card-body">
                  <form ref={form} onSubmit={sendEmail}>
                    <div>
                      <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">Nombre</label>
                      <input type="text" required name="user_name" className="form-control py-1 ps-1" id="exampleFormControlInput1" autoComplete='none' placeholder="Nombre"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">Correo</label>
                      <input type="email" required name="user_email" className="form-control py-1 ps-1" id="email" autoComplete='none' placeholder="Correo"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Mensaje</label>
                      <textarea className="form-control ps-1" type="text" required autoComplete='none'  id="textarea" name="message" rows="3"></textarea>
                    </div>
                    <button type='submit' value='Send' className='btn btn-footer'>Enviar</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer