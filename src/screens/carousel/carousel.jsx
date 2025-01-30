import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bird1 from '../../assets/image/bird1.jpg'
import bird2 from '../../assets/image/bird2.jpg'
import bird3 from '../../assets/image/bird3.jpg'
import './carousel.css'

export const CarouselSlider = ()=>{
    return(
        <Carousel className='mainCarousel'>
        <div className='image'>
            <img src={bird1} />
            <p className="legend">Legend 1</p>
        </div>
        <div className='image'>
            <img src={bird2} />
            <p className="legend">Legend 2</p>
        </div>
        <div className='image'>
            <img src={bird3}  />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    )
}