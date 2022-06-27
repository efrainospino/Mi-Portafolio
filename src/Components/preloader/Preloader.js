import React from 'react';
import Preloader1 from '../../media/Preloader.mp4';

import './preloader.css';

const Preloader = () => {
  return (
    <div>
        <video className='preloader1' src={Preloader1} autoPlay loop muted ></video>
    </div>
  )
}

export default Preloader
