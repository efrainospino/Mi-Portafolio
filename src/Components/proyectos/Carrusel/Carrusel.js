import React from 'react';

import './Carrusel.css';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import SwiperCore, { Navigation, Pagination } from "swiper";


import Slidesinfo from './Slides/Slides';




export const Carrusel = () => {

  const slides = Slidesinfo.map((slide) => (
    <SwiperSlide className="card text-center" key={slide.key}>
        <img src={slide.img} className="card-img-top img-fluid" alt={slide.alt}/>
        <div className="card-body">
            <h5 className="card-title">{slide.desc}</h5>
            <a href={slide.link} className="btn btn-outline btn-carrusel" target="_blank" rel="noopener noreferrer">Ir</a>
        </div>
    </SwiperSlide>
  ));


  SwiperCore.use([Navigation, Pagination]);

  return (
    <>

      <div className="row">
        <div className="col-11 col-lg-12 px-0 mx-auto">
            <Swiper
              slidesPerView={3}
              spaceBetween={12}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
                {slides}
              </Swiper>
        </div>
      </div>

    </>
  )
}

export default Carrusel