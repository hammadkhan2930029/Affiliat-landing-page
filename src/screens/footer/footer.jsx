import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.css';
export const Footer = () => {
  return (
    <div className='footer'>
        <TwitterIcon className='footerIcon'/>
        <FacebookIcon className='footerIcon'/>
    </div>
  )
}
