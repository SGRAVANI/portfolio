import React from 'react'
import "./Portfolio.css"
import findRoute from "../../Assets/findroute.jpg";
import capstone from "../../Assets/capstone.jpg";
import smartStote from "../../Assets/smartStore-1.jpg";
import animalSound from "../../Assets/animalsound.jpg";
import google from "../../Assets/google.jpg";
// import capstone from "../../Assets/capstone.jpg";
export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio-container'>
        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
          <img src={findRoute} />
          </div>
            <h3>Find Route Puzzle using JS</h3>
            <div className='portfolio-item-cta'>
            <a href="https://github.com/SGRAVANI/find-route-puzzle" className='btn' target="_blank">Github </a>
            <a href="https://sgravani.github.io/find-route-puzzle/" className='btn btn-primary' target="_blank"> Live Demo </a>
            </div>
        </article>


        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
          <img src={smartStote} />
          </div>
            <h3>Ecommerce Web App. with React</h3>
            <div className='portfolio-item-cta'>
            <a href="https://github.com/SGRAVANI/smart-store" className='btn' target="_blank">Github </a>

            <a href="https://sgravani.github.io/smart-store/" className='btn btn-primary' target="_blank"> Live Demo </a>
            </div>
        </article>


        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
          <img src={animalSound} />
          </div>
            <h3>Animal Sounds for kids</h3>
            <div className='portfolio-item-cta'>
            <a href="https://github.com/SGRAVANI/AnimalSounds4kids/" className='btn' target="_blank">Github </a>
            <a href="https://sgravani.github.io/AnimalSounds4kids/" className='btn btn-primary' target="_blank"> Live Demo </a>
            </div>
        </article>


        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
          <img src={capstone} />
          </div>
            <h3>HTML+CSS Responsive Template </h3>
            <div className='portfolio-item-cta'>
            <a href="https://github.com/SGRAVANI/capstone-project" className='btn' target="_blank">Github </a>
            <a href="https://sgravani.github.io/capstone-project/" className='btn btn-primary' target="_blank"> Live Demo </a>
            </div>
        </article>


        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
          <img src={google} />
          </div>
            <h3>Google Landing Page</h3>
            <div className='portfolio-item-cta'>
            <a href="https://github.com/SGRAVANI/mockInterview-LandingPage" className='btn' target="_blank">Github </a>
            <a href="https://sgravani.github.io/mockInterview-LandingPage/" className='btn btn-primary' target="_blank"> Live Demo </a>
            </div>
        </article>




        </div> 
    </section>
  )
}
