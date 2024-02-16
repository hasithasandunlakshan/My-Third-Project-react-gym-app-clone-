import React from 'react'
import "./About.css"
import about from "../Images/about.png"

export default function About() {
  
  return (
    <div className='about'>
        <div  data-scroll data-scroll-speed="0.2" className="img">
            <img src={about} alt="" />
        </div>
        <div data-scroll data-scroll-speed="0.1" className="descriptin">
            <h1 className="title">Learn About <br />Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur earum impedit debitis. Et molestias nam nemo aliquid quia? Consequuntur magnam, consequatur vitae nostrum laboriosam esse distinctio non at ab excepturi.</p>
            <button className='btn-join'>Read more</button>
        </div>

    </div>

  )
}

