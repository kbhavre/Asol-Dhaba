import React from 'react'
import Logo from '../Assets/logo.png'
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {FaFacebook} from "react-icons/fa"


const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className="footer-section-one">
            <div className="footer-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
                <BsTwitter/>
                <BsLinkedin/>
                <BsYoutube/>
                <FaFacebook/>
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>kbhavre@test.com</span>
                <span>All Rights Reserved </span>
                <span>Kunal Bhavare </span>
                <span>© Dec 2023 </span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>

  )
}

export default Footer