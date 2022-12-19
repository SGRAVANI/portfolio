import React from 'react'

export default function PortfolioCard(props) {
  return (
    
        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
          <img src={props.img} />
          </div>
            <h3>{props.heading}</h3>
            <div className='portfolio-item-cta'>
            <a href={props.githubRepLink} className='btn' target="_blank">Github </a>
            <a href={props.githubLiveLink} className='btn btn-primary' target="_blank"> Live Demo </a>
            </div>
        </article>






  )
}
