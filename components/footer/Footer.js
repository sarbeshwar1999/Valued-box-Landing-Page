import React from 'react'



import logo from "../../assets/LOGO.svg"

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
        <Footer className="page-footer">
        <div className="container">
         <div className="row">

          <div className="col-md-4">
          <img className="company-logo"alt="Company logo" src={logo}/>
          </div>
          <div className="col-md-4">
          <h3>ABOUT US</h3>
          <ul className="unstyled-list">
            <li>Our Story</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
          
          
          
          </div>
          <div className="col-md-4">
          <h3>SUPPORT</h3>
         <ul>
           
           <li>Contact Us</li>
           <li>Terms of Use</li>
           <li>Privacy Policy</li>
         </ul>
         </div>


         <div className="col-md-4">
         <h3>CONTACT WITH US</h3>
         <ul>
           <li></li>
         </ul>
         </div>

    </div>
    <div className="row">
      <p className="col-sm">
          &copy;{new Date()} txrfvgbn;olkjcfdshg
      </p>
    </div>
      </div>
      </Footer>

        </div>
    )
}
export default Footer;
