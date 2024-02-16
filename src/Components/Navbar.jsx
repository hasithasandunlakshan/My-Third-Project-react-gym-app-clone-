import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
import { Link } from 'react-scroll'
export default function Navbar() {
  const [nav,setnav]=useState(false);
  const changebackground =()=>{
    if(window.scrollY>=50){
      setnav(true);
    }
    else{
      setnav(false);
    }
  }
  window.addEventListener('scroll',changebackground)
  return (
    <div className='Nav'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className="Features">

        <ul className='Menu'>
          <li className={nav ? "active":"Menu-items "}>
            <Link>HEADER</Link>
            </li>
          <li className={nav ? "active":"Menu-items "}><Link>FEATURES</Link></li>
          <li className={nav ? "active":"Menu-items "}><Link>OFFER</Link></li>
          <li className={nav ? "active":"Menu-items "}><Link>ABOUT</Link></li>
          <li className={nav ? "active":"Menu-items "}><Link>CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
}
