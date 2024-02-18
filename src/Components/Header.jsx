import './Header.css'
import React from 'react'
import { delay,motion } from 'framer-motion'
import "../App.css"
import LocomotiveScroll from 'locomotive-scroll'

export default function Header() {

  return (
    <div  className='main'  data-scroll-container>
        <div className="new">
        <motion.h1 className='def'
         initial={{ scale: 0 }}
         animate={{  scale: 1 }}
        
         transition={{
          type: "spring",
          stiffness: 50,
          damping: 20
        }}
        
        
        
        >STEP UP YOUR </motion.h1>
        
            <motion.h1 className='first  secondline'
                     initial={{ scale: 0 }}
                    
                     animate={{scale:1}}
                     transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 20
                    }}
                    
            
            
            
            > <motion.span className='ff'

            
            > FITNESS</motion.span> WITH YOU</motion.h1>
            
        
        <motion.h2 className='h2line'
        initial={{ scale: 0 }}
        animate={{  scale: 0.8 }}
        
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20
        }}
        
        
        >Build Your Body And Fitness With Professional Touch</motion.h2>
        <motion.button  className='btn-join'
        initial={{x:-200,   scale:0.7}}
        animate={{x:0}}
        
        transition={{
          stiffness:50,

        }}
        whileTap={{ scale: 0.8 }} 



        >Join us</motion.button>
    </div></div>
  )
}
