import React from 'react'
import img1 from "../Images/1.svg"
import img2 from "../Images/2.svg"
import img3 from "../Images/3.svg"
import img4 from "../Images/4.svg"
import "./Features.css"

export default function Features() {
  return (
    <div className='features'>
      <h1 data-scroll-css-progress>FEATURES</h1>
      <ul className='list'>
        <li data-scroll data-scroll-speed="0.1" className='fea-items'>
          <img src={img1} alt="" />
          <h2>Weight Lifting</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat perferendis laborum recusandae, voluptates officiis commodi numquam id iusto ad.</p>
        </li>
        <li data-scroll data-scroll-speed="-0.1" className='fea-items'>
          <img src={img2} alt="" />
          <h2>Specific Muscles</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat perferendis laborum recusandae, voluptates officiis commodi numquam id iusto ad.</p>
        </li>
        <li data-scroll data-scroll-speed="0.1" className='fea-items'>
          <img src={img3} alt="" />
          <h2>Flex Your Muscle</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat perferendis laborum recusandae, voluptates officiis commodi numquam id iusto ad.</p>
        </li>
        <li data-scroll data-scroll-speed="-0.1" className='fea-items'>
          <img src={img4} alt="" />
          <h2>Cardio Exercise</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat perferendis laborum recusandae, voluptates officiis commodi numquam id iusto ad.</p>
        </li>
      </ul>

    </div>
  )
}
