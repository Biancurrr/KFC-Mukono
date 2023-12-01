import React from 'react';
import './footer.css';
import footerLogo from '../../assets/img/footer-logo.png'
import playStore from '../../assets/img/google-play.png'
import appStore from '../../assets/img/app-store.png'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <img className='footer-logo' src={footerLogo} alt="" />
        <div className="row footer-inner">
            <div className="col-md-2">
                <ul>
                    
                </ul>
            </div>
            <div className="col-md-2">
            <ul>
                    <li><a href="">.</a></li>
                </ul>
            
                
            </div>
            <div className="col-md-4">
              
            </div>
        </div>
        <div className="copywrite">
            <p>©KFC Mukono.All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer