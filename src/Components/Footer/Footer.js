import React from 'react'
import "./Footer.css"
import { FaFacebookF} from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
export default function Footer() {
  return (
    <footer id="footer">
    <a href="#" className='footer-logo'>ShakuntlaPortfolio</a>
    <ul className='permalink'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skill">Skills</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className='footer-social'>
      <a href="https://www.facebook.com/shakuntla.ravani/" target="_blank"><FaFacebookF/></a>
      <a href="https://www.instagram.com/shakuntlaravani/" target="_blank"><BsInstagram/></a>
      {/* <a href="" >facebook</a> */}
    </div>
    <div className='footer-copyright'>
      <small>
        &copy;ShakuntlaPortfolio, All rights reserved
        </small>
    </div>
    </footer>
  )
}
