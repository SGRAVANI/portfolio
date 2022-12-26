import React from 'react'
import PortfolioCard from './PortfolioCard';
import "./Portfolio.css"
import findRoute from "../../Assets/findroute.jpg";
import capstone from "../../Assets/capstone.jpg";
import smartStote from "../../Assets/smartStore-1.jpg";
import animalSound from "../../Assets/animalsound.jpg";
import google from "../../Assets/google.jpg";
import clock from "../../Assets/25+5Clock.png";
import randomQuote from "../../Assets/random-quote.jpg";
import calci from "../../Assets/calci.png";
import markedEditor from "../../Assets/marked-editor.jpg"
let pData=[{img:findRoute,heading:"Find Route Puzzle using JS",githubRepLink:"https://github.com/SGRAVANI/find-route-puzzle",githubLiveLink:"https://sgravani.github.io/find-route-puzzle/"},
{img:smartStote,heading:"Ecommerce Web App. with React",githubRepLink:"https://github.com/SGRAVANI/smart-store",githubLiveLink:"https://sgravani.github.io/smart-store/"},
{img:animalSound,heading:"Animal Sounds for kids",githubRepLink:"https://github.com/SGRAVANI/AnimalSounds4kids/",githubLiveLink:"https://sgravani.github.io/AnimalSounds4kids/" },
{img:capstone,heading:"HTML+CSS Responsive Template",githubRepLink:"https://github.com/SGRAVANI/capstone-project",githubLiveLink:"https://sgravani.github.io/capstone-project/"},
{img:google,heading:"Google Landing Page",githubRepLink:"https://github.com/SGRAVANI/mockInterview-LandingPage",githubLiveLink:"https://sgravani.github.io/mockInterview-LandingPage/" },
{img:clock,heading:"25+5 Clock using React",githubRepLink:"https://github.com/SGRAVANI/Clock-25-5",githubLiveLink:"https://sgravani.github.io/Clock-25-5/"},
{img:randomQuote,heading:"Random Quote Generator",githubRepLink:"https://github.com/SGRAVANI/random-quote-generator",githubLiveLink:"https://sgravani.github.io/random-quote-generator/"},

{img:calci,heading:"Calculator using React",githubRepLink:"https://github.com/SGRAVANI/calculator",githubLiveLink:"https://sgravani.github.io/calculator/"},

{img:markedEditor,heading:"Marked Editor using React",githubRepLink:"https://github.com/SGRAVANI/marked-editor",githubLiveLink:"https://sgravani.github.io/marked-editor/"},

]
let list=pData.map((ele,index)=><PortfolioCard key={index} img={ele.img} heading={ele.heading} githubRepLink={ele.githubRepLink} githubLiveLink={ele.githubLiveLink} />)  
export default function Portfolio1() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio-container'>
        {list}
        {/* <article className='portfolio-item'>
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
        </article> */}




        </div> 
    </section>

  )
}
