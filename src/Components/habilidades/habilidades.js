import React from 'react';
import './habilidades.css';
import react from '../../media/react.png';
import nextjs from '../../media/nextjs.png';
import nodejs from '../../media/nodejs.png';
import javascript from '../../media/javascript.png';
import mongodb from '../../media/mongodb.png';
import sql from '../../media/sql.png';
import php from '../../media/php.png';
import html from '../../media/html.png';
import css from '../../media/css.png';
import github from '../../media/github.png';
import bootstrap from '../../media/bootstrap.png';
import tailwind from '../../media/tailwind.png';








const habilidades = () => {
  return (
    <section className='container mt-lg-5 pt-lg-5' id='habilidades'>
        <div className="row">
            <div className="col-8 col-md-6 mx-auto mt-5 pt-5" id="expand">
                <h2 className='typetext' id='h2'>
                    <span
                    className='span maquina fs-4'>
                        02.
                    </span>
                    &nbsp;Mis habilidades
                </h2>
                <div className="wrapper">
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={react} id="imgskill" className="card-img-top mx-auto pt-3" alt="react"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>REACT JS</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={nextjs} id="imgskill" className="card-img-top mx-auto pt-3" alt="nextjs"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>NEXT JS</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={nodejs} id="imgskill" className="card-img-top mx-auto pt-3" alt="nodejs"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>NODE JS</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={javascript} id="imgskill" className="card-img-top mx-auto pt-3" alt="javascript"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>JAVASCRIPT</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={mongodb} id="imgskill" className="card-img-top mx-auto pt-3" alt="mongodb"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>MONGO DB</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={sql} id="imgskill" className="card-img-top mx-auto pt-3" alt="sql"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>SQL</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={php} id="imgskill" className="card-img-top mx-auto pt-3" alt="php"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>PHP</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={html} id="imgskill" className="card-img-top mx-auto pt-3" alt="html"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>HTML</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={css} id="imgskill" className="card-img-top mx-auto pt-3" alt="css"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>CSS</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={bootstrap} id="imgskill" className="card-img-top mx-auto pt-3" alt="bootstrap"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>BOOTSTRAP</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={tailwind} id="imgskill" className="card-img-top mx-auto pt-3" alt="tailwind"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>TAILWIND</h5>
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card" id='skillCard'>
                        <img src={github} id="imgskill" className="card-img-top mx-auto pt-3" alt="github"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" id='h5skill'>GITHUB</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default habilidades
