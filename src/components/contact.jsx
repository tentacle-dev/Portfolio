import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function contact(props) {
  return (
    <section className='mx-3 my-8' id="contact">
      <h3 className='anton text-justify text-md md:text-xl mx-4'>I'm fluent in coding languages and human languages. Contact me to discuss your next project.</h3>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-8 sm:mx-8 mt-4 '>
        <div className="social-card ml-4 mb-4 justify-items-center">
          <div className="grid grid-cols-4 mb-4 justify-items-stretch ">
            <div className='col-span-1 mx-4 mt-4'>
              <FontAwesomeIcon 
              className='svg-inline--fa text-2xl' 
              icon={faPhone}  />
            </div>
            <div className='mx-4 mt-4 col-span-3'>
              <span className='anton text-xl pb-24'>+94 777 032505</span>
            </div>
          </div>
        </div>
        <div className="social-card ml-4 mb-4 justify-items-center">
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
        </div>
        <div className="social-card ml-4 mb-4 justify-items-center">
          <div className="grid grid-cols-4 mb-4 justify-items-stretch ">
            <div className='col-span-1 mx-4 mt-4'>
              <FontAwesomeIcon 
              className='svg-inline--fa text-2xl' 
              icon={faEnvelope}  />
            </div>
            <div className='mx-4 mt-4 col-span-3'>
              <span className='anton text-xl text-right'>tanush0525@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="social-card ml-4 mb-4 justify-items-center">
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
        </div>
        <div className="social-card ml-4 mb-4 justify-items-center">
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
        </div>
        <div className="social-card ml-4 mb-4 justify-items-center">
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
        </div>
        <div className="social-card ml-4 mb-4 justify-items-center">
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
        </div>
      </div>

    </section>
  )
}

export default contact
