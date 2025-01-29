import React from 'react';
import './screenTwo.css';
import image from '../../assets/image/image.jpg'
export const ScreenTwo = () => {
  return (
  <div className="screen_tow">
    <div className="two">
        <div className="left2">
            <img src={image} alt=" image" className='aunt' />
        </div>
        <div className="right2">
            <span className='h1'>Introduce your idea</span>
            <span className='h4'>
            Include a paragraph of text here that tells people more about your offer and why they should sign up for your emails or download your resource.
            </span>
            <button className='button'> Download Now</button>
        </div>
    </div>
  </div>
  )
}
