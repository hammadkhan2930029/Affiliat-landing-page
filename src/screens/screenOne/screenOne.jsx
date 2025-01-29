import React from 'react';
import './ScreenOne.css'
import book from '../../assets/image/book.png'
export const ScreenOne = () => {
    return (
        <div className='screenOne'>
            <div className="main">

                <div className="left">
                    <span className="heading">Add your title here</span>
                    <span className="text">Subtitle with a supporting statment</span>
                    <button className="btn">Download Now</button>

                </div>
                <div className="right">
                    <img src={book} alt="Book" className="book" />

                </div>
            </div>

        </div>
    )
}
