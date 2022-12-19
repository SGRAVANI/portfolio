import React from 'react'
import Cv from "../../Assets/shakuntla_Ravani_CV.pdf"

export default function CTA() {
  return (
    <div className='cta'>
     <a href={Cv} download className='btn'>Download CV</a>
     <a href="#contact" className='btn btn-primary'>Let's Talk</a>
     
    
    </div>
  )
}
