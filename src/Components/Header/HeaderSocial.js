import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import {BsDribbble } from 'react-icons/bs';
export default function HeaderSocial() {
  return (
    <div className='header__social'>
        <a href="https://github.com/SGRAVANI" target="__blank" ><BsGithub/></a>
        <a href="https://www.linkedin.com/in/shakuntla-ravani/" target="__blank"><BsLinkedin/></a>
        <a href="https://dribbble.com/shakuntla_ravani" target="__blank"><BsDribbble/> </a>
    </div>
  )
}
