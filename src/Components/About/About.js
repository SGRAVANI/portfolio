import React from 'react'
import "./About.css"
import meImg from "../../Assets/image5.png"
import { FaUserGraduate } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaSchool } from 'react-icons/fa';
import { SiMicrosoftacademic } from 'react-icons/si';
 import { MdModelTraining } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
export default function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
        <div className='about__me'>
          <img src={meImg}/>
        </div>
        <div className='about-content'>
          <h3 className="about-academic">Academic Record</h3>
          <div className='about__cards'>
            
            <article className='about_card'><FaUserGraduate className='about__icon'/>
            <h5>Post Graduation</h5>
            <small>M.Tech(CSE)</small> <br></br>
            <small>79.10%</small>
            </article>
            <article className='about_card'><FaGraduationCap className='about__icon'/>
            <h5>Graduation</h5>
            <small>BE(CSE)</small>
            <br></br>
            <small>65.38%</small>
            </article>
            <article className='about_card'><FaSchool className='about__icon'/>
            <h5>12<sup>th</sup></h5>
            <small>54.62%</small>
           
            </article>
            <article className='about_card'><SiMicrosoftacademic className='about__icon'/>
            <h5>10<sup>th</sup></h5>
            <small>85%</small>
            </article>
            <article className='about_card'><MdModelTraining className='about__icon'/>
            <h5>InterShip</h5>
            <small>Front-End Development with React</small>
            </article>
           
            <article className='about_card'><GiTeacher className='about__icon'/>
            <h5>Work Experience</h5>
            <small>9+ years in Academic <br></br> (in Engineering Colleges) </small>
            </article>
          </div>
          <p>I am a software engineer with expertise and keen interest in building frontend applications using React, JavaScript, Ajax, HTML, CSS , Bootstrap and Github

I have good knowledge and experience in building responsive web applications which can target various devices with different screen resolutions

{/* I have basic knowledge and understanding of Typescript and Nextjs. I have also worked and have prior experience with various Search Engine Optimization (SEO) techniques */}

I am a quick learner and passionate about learning new technologies.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
