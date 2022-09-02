import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus ap__bg flex__center section__padding' id = 'about'>
  <div className='app__aboutus-overlay flex__center '>
    <img src={images.G} alt = "g ;etter"/>
  </div>
  </div>
);

export default AboutUs;
