import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faJira } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'

const Tech = (props) => {
  return (
    <div className='body text-center mt-2 ' id='technologies'>
      <h1 className='text-center text-white text-3xl pb-2 uppercase underline
       decoration-sky-500'>TECHNOLOGIES</h1>
        <div className='md:flex leading-6 '>
        <div className="sm:flex md:flex-none md:basis-1/2 mx-4 ">
          <div className="sm:flex-auto mx-4 m-2">
              <h2 className='heading text-2xl fontWeight-700'>CLIENT SIDE</h2>
              <div className=''>
                <p className='grid grid-cols-2 justify-items-stretch'>
                  <FontAwesomeIcon className='mt-1 justify-self-end animate-icons' icon={faHtml5} />
                  <span className='text-left mx-2'>HTML</span>
                </p>
                <p className='grid grid-cols-2 justify-items-stretch'>
                  <FontAwesomeIcon className='mt-1 justify-self-end animate-icons' icon={faCss3} /> 
                  <span className='text-left mx-2'>CSS</span>
                  </p>
                <p className='grid grid-cols-2 justify-items-stretch '>
                  <FontAwesomeIcon className='mt-1 justify-self-end animate-icons' icon={faJs} />
                  <span className='text-left mx-2'>JavaScript</span>
                </p>
                <p className='grid grid-cols-2 justify-items-stretch'>
                  <FontAwesomeIcon className='mt-1 justify-self-end animate-icons' icon={faReact} /> 
                  <span className='text-left mx-2'>REACT</span>
                </p>
              </div>
          </div>
          <div className="sm:flex-auto mx-4  m-2">
            <h2 className='heading text-2xl fontWeight-700'>UI </h2>
            <p className='grid grid-cols-2 justify-items-stretch'>
              <FontAwesomeIcon className='mt-1 justify-self-end animate-icons' icon={faBootstrap} />
              <span className='text-left mx-2'>Bootstrap</span>
            </p>
              <p className='grid grid-cols-2 justify-items-stretch'>
                <svg xmlns="http://www.w3.org/2000/svg" className='svg-inline--fa mt-1 justify-self-end animate-icons' viewBox="0 0 24 24"><title>tailwind</title><path fill='currentColor' d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z" /></svg>                
                <span className='text-left mx-2'>Tailwind</span>
              </p>
              <p className='grid grid-cols-2 justify-items-stretch'>
              <svg xmlns="http://www.w3.org/2000/svg" className='svg-inline--fa mt-1 justify-self-end animate-icons' viewBox="0 0 24 24"><title>dharmachakra</title><path fill='currentColor' d="M11,2V3C9.27,3.2 7.69,3.9 6.4,4.94L5.64,4.18L4.22,5.6L5,6.35C3.9,7.68 3.21,9.3 3,11H2V13H3C3.21,14.68 3.9,16.26 5,17.56L4.22,18.32L5.64,19.74L6.39,19C7.71,20.07 9.3,20.77 11,21V22H13V21C14.69,20.77 16.29,20.07 17.6,19L18.36,19.74L19.78,18.32L19,17.57C20.1,16.27 20.79,14.68 21,13H22V11H21C20.79,9.3 20.1,7.69 19,6.36L19.78,5.6L18.36,4.18L17.61,4.94C16.29,3.87 14.69,3.2 13,3V2H11M11,5V8L10,8.5L7.81,6.35C8.72,5.67 9.81,5.17 11,5M13,5C14.16,5.18 15.26,5.64 16.2,6.35L14,8.5L13,8V5M6.4,7.76L8.5,10L8,11H5C5.16,9.84 5.7,8.7 6.39,7.75L6.4,7.76M17.6,7.76C18.33,8.71 18.81,9.82 19,11H16L15.5,10L17.61,7.76H17.6M12,10C13.12,10 14,10.88 14,12C14,13.12 13.12,14 12,14C10.88,14 10,13.12 10,12C10,10.88 10.88,10 12,10M5,13H8L8.57,14L6.39,16.15C5.67,15.24 5.19,14.16 5,13V13M16,13H19C18.81,14.15 18.33,15.24 17.61,16.16L15.5,14L16,13M10,15.5L11,16V19C9.83,18.8 8.73,18.31 7.8,17.57L10,15.5M14,15.5L16.19,17.57C15.28,18.25 14.19,18.83 13,19V16L14,15.5Z" /></svg>
                <span className='text-left mx-2'>Chakra UI</span>
              </p> 
              <p className='grid grid-cols-2 justify-items-stretch'>
              <svg xmlns="http://www.w3.org/2000/svg" className='svg-inline--fa mt-1 justify-self-end animate-icons' viewBox="0 0 24 24"><title>material-ui</title><path fill='currentColor' d="M8,16.61V15.37L14,11.91V7.23L9,10.12L4,7.23V13L3,13.58L2,13V5L3.07,4.38L9,7.81L12.93,5.54L14.93,4.38L16,5V13.06L10.92,16L14.97,18.33L20,15.43V11L21,10.42L22,11V16.58L14.97,20.64L8,16.61M22,9.75L21,10.33L20,9.75V8.58L21,8L22,8.58V9.75Z" /></svg>
                <span className='text-left mx-2'>Material UI</span>
              </p> 
              <p className='grid grid-cols-2 justify-items-stretch'>
                <img src={props.daisyimg} className='svg-inline--fa mt-1 gifcorrect animate-icons justify-self-end' />
                <span className='text-left mx-2'>Daisy UI</span>
              </p> 
          </div>
        </div>
        <div className='sm:flex md:flex-none md:basis-1/2 mx-4 '>
          <div className="sm:basis-1/2 mx-4 m-2">
            <h2 className='heading text-2xl fontWeight-700'>SERVER SIDE</h2>
            <p className='grid grid-cols-2 justify-items-stretch'>
              <FontAwesomeIcon className='mt-1 justify-self-end animate-icons' icon={faPhp} /> 
              <span className='text-left mx-2'>PHP</span>
            </p>
            <p className='grid grid-cols-2 justify-items-stretch'>
            <svg xmlns="http://www.w3.org/2000/svg" className='svg-inline--fa animate-icons mt-1 justify-self-end' viewBox="0 0 24 24"><title>dot-net</title><path fill='currentColor' d="M2,15A1,1 0 0,1 3,16A1,1 0 0,1 2,17A1,1 0 0,1 1,16A1,1 0 0,1 2,15M21,17H19V9H17V7H23V9H21V17M16,7V9H14V11H16V13H14V15H16V17H12V7H16M11,7V17H9L6,11V17H4V7H6L9,13V7H11Z" /></svg>        
              <span className='text-left mx-2'>ASP.NET</span>
            </p>
            <p className='grid grid-cols-2 justify-items-stretch'>
              <FontAwesomeIcon className='mt-1 justify-self-end animate-icons' icon={faNodeJs} /> 
              <span className='text-left mx-2'>NodeJs</span>
            </p> 
            <p className='grid grid-cols-2 justify-items-stretch'>
            <img src={props.expressimg} className='svg-inline--fa mt-1 gifcorrect animate-icons justify-self-end' />
              <span className='text-left mx-2'> Express JS</span>
            </p> 
          </div>
          <div className="sm:basis-1/2 md:flex-basis-1/4 mx-4 m-2">
            <h2 className='heading text-2xl fontWeight-700'>DATABASE</h2>
            <p className='grid grid-cols-2 justify-items-stretch'>
              
              <FontAwesomeIcon className='mt-1 justify-self-end animate-icons' icon={faDatabase} />  
              <span className='text-left mx-2'>SQL</span>
            </p>
            <p className='grid grid-cols-2 justify-items-stretch'>
              <FontAwesomeIcon className='mt-1 justify-self-end animate-icons' icon={faEnvira} /> 
              <span className='text-left mx-2'>NoSQL</span>
             </p>
          </div>
        </div>
        </div>
        <div className='flex mx-4 '>
          <div className="flex-auto mx-4 m-2">
            <h2 className='heading text-2xl fontWeight-700'>Project Control</h2>
            <p className='grid grid-cols-2 justify-items-stretch'>
              <FontAwesomeIcon icon={faGithub} className='mt-1 justify-self-end animate-icons' />
              <span className='text-left mx-2'>Github</span>
              </p>
            <p className='grid grid-cols-2 justify-items-stretch'>
              <FontAwesomeIcon icon={faJira} className='mt-1 justify-self-end animate-icons' /> 
              <span className='text-left mx-2'>JIRA</span>
              </p>
          </div>
          <div className="flex-auto mx-4 m-2">
            <h2 className='heading text-2xl fontWeight-700'>GRAPHICS</h2>
            <p className='grid grid-cols-2 justify-items-stretch'>
              <FontAwesomeIcon icon={faFigma} className='mt-1 justify-self-end animate-icons' />
              <span className='text-left mx-2'>FIGMA</span>
            </p>
            <p className='grid grid-cols-2 justify-items-stretch'>
              <FontAwesomeIcon icon={faEnvira} className='mt-1 justify-self-end animate-icons' />
              <span className='text-left mx-2'>LIGHROOM</span>
            </p>
          </div>
        </div>
      </div>
         
  )
}

export default Tech
