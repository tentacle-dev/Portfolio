import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const containerVariants = {
  initial : {
    opacity : 0 ,
    y : 150
  },
  view : {
    y : 0,
    opacity : 1,
    transition : {
      delay : 0.5,
      type : 'spring'
    }   

  },
  animate : {
    opacity: 1,
    transition: {
      type:'spring'
      
    }
  }
}
  

const cardVariants = {
  initial : {
    opacity : 0,
    y : -100
  },
  animate : {
    opacity : 1,
    y : 0
  }
}

function contact(props) {
  return (
    <motion.section 
    variants={containerVariants}
    initial='initial'
    animate='animate'
    whileInView='view' 
    className='lg:mx-32 lg:my-16 mx-2 ' id="contact">
      <h3 className='anton text-justify text-md md:text-xl mx-8 my-8'>I'm fluent in coding languages and human languages. Contact me to discuss your next project.</h3>
      <motion.div
      variants={containerVariants}
      initial='initial'
      animate='animate'
      whileInView='view'
      className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-8 lg:gap-y-4 lg:gap-x-2 sm:mx-8 mt-4 my-12'>
        <motion.div
        variants={cardVariants}
        whileHover='hover'
        transition={{ delay: 0.1 * 1 }}
        className="social-card ml-4 mb-4 justify-items-center hover:text-gray-900 hover:bg-green-700">
          <div className="grid grid-cols-4 mb-4 justify-items-stretch  ">
            <div className='col-span-1 mx-4 mt-4'>
              <FontAwesomeIcon 
              className='svg-inline--fa text-2xl' 
              icon={faPhone}  />
            </div>
            <div className='mx-4 mt-4 col-span-3 '>
              <span className='anton text-xl pb-24'>+94 777 032505</span>
            </div>
          </div>
        </motion.div>
        <motion.div
        variants={cardVariants}
        whileHover='hover'
        transition={{ delay: 0.1 * 5 }}

        className="social-card ml-4 mb-4 justify-items-center hover:text-gray-900 hover:bg-blue-400">
          <div className="grid grid-cols-4 mb-4 justify-items-stretch ">
            <div className='col-span-1 mx-4 mt-4'>
              <FontAwesomeIcon 
              className='svg-inline--fa text-2xl' 
              icon={faLinkedin}  />
            </div>
            <div className='mx-4 mt-4 col-span-3'>
              <span className='anton text-xl pb-24'><a href='https://www.linkedin.com/in/tanushsathiyaseelan-3165a218a/'>Tanush Sathiyaseelan</a></span>
            </div>
          </div>
        </motion.div>
        <motion.div
        variants={cardVariants}
        whileHover='hover'
        className="social-card ml-4 mb-4 justify-items-center hover:text-gray-900 hover:bg-green-600 hover:scale-50">
          <div className="grid grid-cols-4 mb-4 justify-items-stretch ">
            <div className='col-span-1 mx-4 mt-4'>
              <FontAwesomeIcon 
              className='svg-inline--fa text-2xl' 
              icon={faEnvelope}  />
            </div>
            <div className='mx-4 mt-4 col-span-3'>
              <span className='anton md:text-xl text-right'>tanush0525@gmail.com</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={cardVariants}
        whileHover='hover'
        className="social-card ml-4 mb-4 justify-items-center hover:text-white">
          <div className="grid grid-cols-4 mb-4 justify-items-stretch ">
            <div className='col-span-1 mx-4 mt-4'>
              <FontAwesomeIcon 
              className='svg-inline--fa text-2xl' 
              icon={faGithub}  />
            </div>
            <div className='mx-4 mt-4 col-span-3'>
              <span className='anton text-xl text-right'><a href='https://github.com/tentacle-dev'>tentacle-dev</a></span>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={cardVariants}
        whileHover='hover'
        className="social-card ml-4 mb-4 justify-items-center hover:text-gray-900 hover:bg-blue-700">
          <div className="grid grid-cols-4 mb-4 justify-items-stretch ">
            <div className='col-span-1 mx-4 mt-4'>
              <FontAwesomeIcon 
              className='svg-inline--fa text-2xl' 
              icon={faTwitter}  />
            </div>
            <div className='mx-4 mt-4 col-span-3'>
              <span className='anton text-xl text-right'><a href=''>Thanush Tash</a></span>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={cardVariants}
        whileHover='hover'
        className="social-card ml-4 mb-4 justify-items-center hover:text-gray-900 hover:bg-blue-900">
          <div className="grid grid-cols-4 mb-4 justify-items-stretch ">
            <div className='col-span-1 mx-4 mt-4'>
              <FontAwesomeIcon 
              className='svg-inline--fa text-2xl' 
              icon={faFacebook}  />
            </div>
            <div className='mx-4 mt-4 col-span-3'>
              <span className='anton text-xl text-right'>Thanush Seelan</span>
            </div>
          </div>
        </motion.div>
        <motion.div
        variants={cardVariants}
        whileHover='hover'
         className="social-card ml-4 mb-4 justify-items-center hover:text-gray-900 hover:bg-pink-700">
          <div className="grid grid-cols-4 mb-4 justify-items-stretch ">
            <div className='col-span-1 mx-4 mt-4'>
              <FontAwesomeIcon 
              className='svg-inline--fa text-2xl' 
              icon={faInstagram}  />
            </div>
            <div className='mx-4 mt-4 col-span-3'>
              <span className='anton text-xl text-right'><a href='https://www.instagram.com/thanuzzh'>thanuzzh</a></span>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </motion.section>
  )
}

export default contact
