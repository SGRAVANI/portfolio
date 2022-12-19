import React from 'react'
import "./Services.css"
import { BiCheck } from 'react-icons/bi';
export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container service-container'>
        <article className='service'>
        <div className='service-head'>
          <h3>React Development</h3>
          </div>
        <ul className='service-list'>
          <li><BiCheck className="service-list-icon"/><p>Creating single page, responsive web applications</p></li>
          <li><BiCheck className="service-list-icon"/><p>Build neat and managed web applications using reusable react components</p></li>
          <li><BiCheck className="service-list-icon"/><p>Creating performant web applications using react useMemo / useCallbacks. Render once and update as needed</p></li>
          <li><BiCheck className="service-list-icon"/><p>Creating web applications with real-time data.</p></li>
          <li><BiCheck className="service-list-icon"/><p>Managing application state using Redux / Context API.</p></li>
        </ul>
        
        </article>
        <article className='service'>
           <div className='service-head'>
            <h3>HTML/CSS Responsive Web Development</h3>
           </div>
           <ul className='service-list'>
           <li><BiCheck className="service-list-icon"/><p>Creating complex, responsive web applications using flexbox and grid</p></li>
          <li><BiCheck className="service-list-icon"/><p>Using HTML Semantics to create SEO compiant web applications</p></li>
          <li><BiCheck className="service-list-icon"/><p>Develop attractive and performant web applications using CSS animations</p></li>
          <li><BiCheck className="service-list-icon"/><p>Building web applications using Canvas and SVG</p></li>
          <li><p></p></li>
           </ul>
        
          </article>
          <article className='service'>
          <div className='service-head'> 
          <h3>Js Development</h3> </div>
          <ul className='service-list'>
          <li><BiCheck className="service-list-icon"/><p>Building applications with real-time data</p></li>
          <li><BiCheck className="service-list-icon"/><p>Creating highly interactive applications</p></li>
          <li><BiCheck className="service-list-icon"/><p>Building performant applications by caching / local storage</p></li>
          <li><BiCheck className="service-list-icon"/><p>Building web application using OOPS</p></li>
          <li><BiCheck className="service-list-icon"/><p>Buiding web applications with dynamic updation</p></li>
          </ul>
          </article>
          <article className='service'>
          <div className='service-head'>
            <h3>Bootstrap Responsive Development</h3>  </div>
          <ul className='service-list'>
          <li><BiCheck className="service-list-icon"/><p>Creating responsive layouts using bootstrap grid</p></li>
          <li><BiCheck className="service-list-icon"/><p>Creating standard and uniform appearance using bootstrap classes</p></li>
          <li><BiCheck className="service-list-icon"/><p>Controlling visibility for different screen widths</p></li>
          <li><BiCheck className="service-list-icon"/><p>Create web applications using prebuilt bootstrap components of React bootstrap</p></li>
          <li><BiCheck className="service-list-icon"/><p>Creating web applications using customized boostrap components</p></li>
          </ul>  </article>
      </div>
    </section>
  )
}
