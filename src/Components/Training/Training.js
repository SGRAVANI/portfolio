import React from 'react'
import { BiCheck } from 'react-icons/bi';
import "./Training.css"
import GitHubCalendar from 'react-github-calendar';
import { FaLeaf } from 'react-icons/fa';


export default function Training() {
let data=[
{front:{heading:"Fellowship in Software Development (React + NodeJs)",desc:"currently doing fellowship from Crio.Do since july, 2023"},back:{info:"Skills Acquired - Life Cycle Methods, DOM Manipulation, Functional Programming, Event Handling, Async Await, React Hooks, Context API and other React features...",link:"https://drive.google.com/file/d/1_DoOnfz_3Fw7No-XSBZQHP93-8FuLjfY/view?usp=sharing"}},

{front:{heading:"Online Course on Basic to Advanced Algorithms from Crio.Do",desc:"July 2023 to Dec 2023", add:"250+ DSA Problem Solved"},back:{info:"Skills Acquired - Dynamic Programming, Segment Tree, Trie, Graph, Tree, Heap, Backtracking, Greedy, Stack, Queue, Linked List, Two Pointers, Prefix Sum, Binary Search, Sorting, Array, String, Set and Map, Hash",link:"https://drive.google.com/file/d/1nZgDLoR5PqAGlRhXIE91RbFdTEfpRUU1/view?usp=sharing"}},



{front:{heading:"Online Course on Responsive Web Design Libraries from FreeCodeCamp.org",desc:" Nov 2022 to Jan 2023 (Representing almost 300 hours of work)"},back:{info:"Skills Acquired - HTML, CSS, Animation using CSS, projects generated - Building Quiz, Tribute Page, Portfolio website, Landing Page",link:"https://drive.google.com/file/d/1O1RZfbxxPIAumDxwq7fwmlY9pyrfdBI6/view?usp=sharing"}},

{front:{heading:"Online Course on Front End Development Libraries from FreeCodeCamp.org",desc:" Nov 2022 to Dec 2022 (Representing almost 300 hours of work)"},back:{info:"Skills Acquired - Bootstrap, JQuery, React, Redux and projects generated - Random quote Machine, Drum Machine, JS Calculator",link:"https://drive.google.com/file/d/105MM_Y16N1bE4vUQ-_KwP8SfExOpiYh3/view?usp=sharing"}},

{front:{heading:"Online Course on Javascript Algorithms and Data Structures from FreeCodeCamp.org",desc:" June 2022 to July 2022 (Representing almost 300 hours of work)"},back:{info:"Fundamental Programming Concepts, Basic and Intermediate algorithm scripting (OOP + Functional Programming), OOP Programing, Projects- Caeser Cipher, Telephone Number Validation, Cash Register",link:"https://drive.google.com/file/d/1N1TqCdi5azBqnQXZg50jzGH3GuCOmTCh/view?usp=sharing"}},

{front:{heading:"Internship on Front-End development from L40.in",desc:"May 2022 - Dec 2022"},back:{info:"Skills Acquired-HTML, CSS, JS, Bootstrap, Exception Handling, Asyncronous Programming ,React, ReactBootstrap",link:"https://drive.google.com/file/d/1_DoOnfz_3Fw7No-XSBZQHP93-8FuLjfY/view?usp=sharing"}},



{front:{heading:"Online Course on Programming for everybody: getting started with python from university of Michigan through Coursera",desc:"March 2020-April 2020"},back:{info:"Fundamental Programming Concepts like array, string, loop, branching, control structute, objects using python",link:"https://drive.google.com/file/d/1MgGDVsVbVTallkQ-c47lmR_5wkMyR76H/view?usp=sharing"}},

{front:{heading:"Online Course on Python Data Structures by university of Michigan through Coursera",desc:"March 2020 - April 2020"},back:{info:"Skills Acquired - String, Lists, Dictionary, Tuple and sets",link:"https://drive.google.com/file/d/1Mk7yhDCIpKOmlm5IV_SDdxyTs1qe8x-1/view?usp=sharing"}},

];
  function generateBlock()
{
let list=data.map((ele,index)=>{
  return (<article className='training' key={index}>
  <div className='flipContainer'>
    <div className='card'>
      <div className='front'>
        <div className='frontStyle'>
      
      <h3>{ele.front.heading}</h3>
      
    
      <p style={{padding:"1rem"}}>{ele.front.desc}</p>
      {ele.front.hasOwnProperty('add')?<p style={{fontWeight:"bold"}}>{ele.front.add}</p>:null} 
      </div>
      </div>
      <div className='back'>
        {/* <div > */}
      
        <p style={{padding:"1rem 0"}}>{ele.back.info}</p>
        
       
        <a href={ele.back.link} target="_blank" className='btn btn-primary'>Certificate Link</a>
        {/* </div> */}
        </div>
    </div>
  </div>
  
  </article>)


})
//console.log(list)
return list;
}
    return (
    <section id="training">
        <h5>My Training</h5>
      <h2>Certifications</h2>
      <div className='container training-container'>
         
       {generateBlock()}


      </div>
      
      <h3 className="git-contri">Github Contributions Calendar</h3>
      <div className='container ' >
        <div style={{display:"flex", flexDirection:"column",alignItems:"center"}} className='git-contri-bg'>
      <GitHubCalendar username="sgravani" colorScheme='light'/>
      </div>
      </div>
    </section>
  )
}
