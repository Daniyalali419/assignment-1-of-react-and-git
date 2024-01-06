import React from 'react'
import Logo from "../assets/Logo.svg"
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt="" />
            </div>
            <div className='footer-icons'>
                <BsTwitter/>
                <BsYoutube/>
                <BsInstagram/>
                <BsFacebook/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrier</span>
                <span>Feedback</span>
                <span>work</span>
            </div>
            <div className='footer-section-columns'>
                <span>223-556-889</span>
                <span>Hello@gmail.com</span>
                <span>Contact@food.com</span>
                <span>Press@food.com</span>

            </div>
            <div className='footer-section-columns'>
                <span>Term & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer