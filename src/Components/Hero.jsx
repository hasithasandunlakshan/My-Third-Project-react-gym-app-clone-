import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Features from './Features'
import Offer from './Offer'
import About from './About'
import Contact from './Contact'
import { motion,useScroll } from "framer-motion";
import { useEffect } from 'react'
import { BrowserRouter, Route, Router} from 'react-router-dom/cjs/react-router-dom.min'

export default function () {
    useEffect(() => {
        (async () => {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
          const scroll = new LocomotiveScroll();
        })();
      }, []);
  return (
    <motion.div  className="Hero" >
    
    <Navbar />

    <Header/>
    <Features/>
    <Offer/>
    <About/>
  

   
    <Contact/>
  </motion.div>
  )
}
