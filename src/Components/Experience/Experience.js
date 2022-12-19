import React from 'react'
import "./Experience.css"
import { BsFillPatchCheckFill } from 'react-icons/bs';

export default function Experience() {
  return (
    <section id="skill">
    <h5>Want to Know My </h5>
    <h2>Skills</h2>
    <div className='container skill-container'>
      <div className='skill-frontend'>
        <h3>Front-End Development</h3>
        <div className='skill-content'>
          <article className='skill-details'>
          <BsFillPatchCheckFill className='skill-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill-details'>
          <BsFillPatchCheckFill className='skill-icon'/>
          <div>
          <h4>React</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>

          <article className='skill-details'>
          <BsFillPatchCheckFill className='skill-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skill-details'>
          <BsFillPatchCheckFill className='skill-icon'/>
          <div>
          <h4>JS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='skill-details '>
          <BsFillPatchCheckFill className='skill-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
        </div>
      </div>
      <div className='skill-backend'>
      <h3>Back-End Development & Other</h3>
        <div className='skill-content'>
          <article className='skill-details'>
          <BsFillPatchCheckFill className='skill-icon'/>
          <div>          
          <h4>Node Js</h4>
          <small className='text-light'>Intermediate</small>
          </div>

          </article>
          <article className='skill-details'>
          <BsFillPatchCheckFill className='skill-icon'/>
           <div>
          <h4>MySQL</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          <article className='skill-details'>
          <BsFillPatchCheckFill className='skill-icon'/>
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          <article className='skill-details'>
          <BsFillPatchCheckFill className='skill-icon'/>
          <div>
                      <h4>Python</h4>
          <small className='text-light'>Basic</small>
          </div>

          </article>
          <article className='skill-details'>
          <BsFillPatchCheckFill className='skill-icon'/>
          <div>
          <h4>C</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
        </div>

      </div>
    </div>

    </section>
  )
}
