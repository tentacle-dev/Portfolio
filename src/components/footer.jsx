import { motion } from 'framer-motion'
import React from 'react'
const containerVariants = {
  initial : {
    opacity : 0 ,
    y : -100
  },
  view : {
    y : 0,
    opacity : 1,
    transition : {
      type : 'spring'
    }   

  }
}

function footer() {
  return (    
    <motion.footer
    variants={containerVariants}
    initial='initial'
    animate='animate'
    whileInView='view'    
    className="footer footer-center p-2 bg-sky-900 text-base-content">
        <div>
            <p>Copyright © 2023 - THANUSH SEELAN</p>
        </div>
    </motion.footer>
  )
}

export default footer
