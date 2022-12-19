import React, { useState } from 'react'
import "./Nav.css"
import {FaHome } from 'react-icons/fa';
import {AiOutlineUser } from 'react-icons/ai';
 import {AiOutlineProfile } from 'react-icons/ai';
 import {BiMessageDetail } from 'react-icons/bi';
 import {AiOutlineFundProjectionScreen } from 'react-icons/ai';
export default function Nav() {
  let [active,setActive]=useState("#")
  return (
   <nav>
    <a href="#" onClick={()=>{setActive("#")}}  className={active=='#'?'active':""}><FaHome/></a>
    <a href="#about" onClick={()=>{setActive("#about")}} className={active=='#about'?'active':""}><AiOutlineUser/></a>
   
    
    <a href="#services" onClick={()=>{setActive("#services")}} className={active=='#services'?'active':""}><AiOutlineProfile/></a>
    <a href="#portfolio" onClick={()=>{setActive("#portfolio")}} className={active=='#portfolio'?'active':""}><AiOutlineFundProjectionScreen/></a>
    <a href="#contact" onClick={()=>{setActive("#contact")}} className={active=='#contact'?'active':""}><BiMessageDetail/></a>
   </nav>
  )
}
