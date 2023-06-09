import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'



const imageVariants = {
  initial : {
    x : -100
  },
  view : {
    x: 0 ,
    transition : {
      type : 'spring'
    }
  }
  
}
const textVariants = {
  initial : {
    x : '+100vh'
  },
  animate : {
    x: 0,
    transition : {
      type : 'spring'
    }
  },
  view : {
    x: 0
  }
}

const Hero = (props) => {
  const [scroll, setScroll] = useState(-10);
    useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <section className=" relative  body mx-4 xl:px-32 lg:h-1/6 lg:mb-8 mt-16 pb-2">
      <div className="md:grid px-4 sm:py-8 pb-16 md:grid-cols-12">
        <div className="md:col-span-7 px-10">
            <motion.div
            variants={imageVariants}
            initial='initial'
            animate='animate'
            whileInView='view'
            className="text-center pt-8 text-white justify-center mb-4 ">
              <img src={props.img} className="rounded-full border-4 object-none img m-auto " alt="Thanush" />
              <span className="lg:text-xl text-xs"><span className='text-5xl'>V</span>OILA <span className='text-3xl'>V</span>ISITORS</span><br /><span className='text-xs mb-4'>( Check some of my projects )</span>
            </motion.div>
        </div>
        <motion.div
        variants={textVariants}
        initial='initial'
        animate='animate'
        view='view'
        className='md:col-span-5 md:mt-24  lg:mt-24  text-white md:text-4xl my-auto arial text-center leading-3 '>
          <p className={scroll && 'typeeffect'}>
            SOFTWARE ENGINEER
          </p> <br />
          <p className={scroll && 'typeeffect'}>
            FULL STACK ENGINEER [MERN]
          </p> <br />
          <h1 className={scroll && 'typeeffect'}>TECH SAVVY</h1>
          <div className='mt-8'>
            <a href='#about' className='btn custom-button-1 lg:text-2xl px-4 mx-2 rounded'>MOI PROJECTS</a>
            <a href='#contact' className='btn custom-button-2 lg:text-2xl px-4 mx-2 rounded'>CONTACT MOI</a>
          </div>
        </motion.div>
      </div>
  </section>
  )
}

export default Hero
