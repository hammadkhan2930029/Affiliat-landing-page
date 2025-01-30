import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import book1 from '../../assets/image/book1.jpg'
import book2 from '../../assets/image/book2.jpg'
import book3 from '../../assets/image/book3.jpg'

import './carousel.css'

export const CarouselSlider = ()=>{
    return(
        <Carousel className='mainCarousel'>
        <div className='image'>
            <img src={book1} />
            <p className="legend">Legend 1</p>
        </div>
        <div className='image'>
            <img src={book2} />
            <p className="legend">Legend 2</p>
        </div>
        <div className='image'>
            <img src={book3}  />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    )
}