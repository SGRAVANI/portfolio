import React from 'react'
import "./Header.css"
import Cta from './Cta'
import HeaderSocial from './HeaderSocial'
// import "../../index.css"
import Me from "../../Assets/me.png"
import My1 from "../../Assets/final15.png"
export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
         <h1 className='small-text'>Shakuntla Ravani</h1>

         <h5 className="text-light">Front-End Developer</h5>
          <Cta/>
          <HeaderSocial/>
          <div className='me'>
             <img src={My1}  />
         </div>
         <a href="#contact" className='scroll__down'>Scroll Down</a>
         

      </div>
    
    </header>
  )
}
