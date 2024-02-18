import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../Images/logo.png";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons library

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <div className='Nav'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <div className="Desk-menu">
         
            <Link className="Menu-items" to='main' spy={true} smooth={true} offset={-10} duration={500}>HEADER</Link>
            <Link className="Menu-items" to='features' spy={true} smooth={true} offset={10} duration={500}>FEATURES</Link>
            <Link className="Menu-items" to='offer' spy={true} smooth={true} offset={10} duration={500}>OFFER</Link>
            <Link className="Menu-items" to='about' spy={true} smooth={true} offset={15} duration={500}>ABOUT</Link>
            <Link className="Menu-items" to='cons' spy={true} smooth={true} offset={10} duration={1000}>CONTACT</Link>
          </div>
          <div className='Mob-Menu'>
            
            <button className="Menu-icon" onClick={handleMenuClick}>
              {showMenu ? <FaTimes className='icon' /> : <FaBars className='icon' />} {/* Using menu bar and close icons */}
            </button>
            <div className={showMenu ? 'ph' : 'hh'}>
              <Link className="Menu-items" to='main' spy={true} smooth={true} offset={-10} duration={500}>HEADER</Link>
              <Link className="Menu-items" to='features' spy={true} smooth={true} offset={10} duration={500}>FEATURES</Link>
              <Link className="Menu-items" to='offer' spy={true} smooth={true} offset={10} duration={500}>OFFER</Link>
              <Link className="Menu-items" to='about' spy={true} smooth={true} offset={15} duration={500}>ABOUT</Link>
              <Link className="Menu-items" to='cons' spy={true} smooth={true} offset={10} duration={1000}>CONTACT</Link>
            </div>
          </div>
        </div>
      </div>
    
  );
}
