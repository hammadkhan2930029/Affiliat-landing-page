import React from 'react';
import './header.css';
import logo from '../../assets/image/logo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
export const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img src={logo} alt="logo" className="img" />

        </div>
        <div className="icons">
            <FacebookIcon className='icon'/>
            <TwitterIcon className='icon'/>


        </div>
    </div>
  )
}
