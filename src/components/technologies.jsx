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


const Tech = () => {
  return (
    <div className='body text-center mt-2 ' id='technologies'>
      <h1 className='text-center text-white text-3xl pb-2 uppercase'>TECHNOLOGIES</h1>
        <div className='md:flex leading-6 '>
        <div className="sm:flex md:flex-none md:basis-1/2 mx-4 ">
          <div className="sm:flex-auto mx-4 m-2">
              <h2 className='heading text-2xl fontWeight-700'>CLIENT SIDE</h2>
              <div className=''>
                <p><FontAwesomeIcon icon={faHtml5} /> HTML</p>
                <p><FontAwesomeIcon icon={faCss3} /> CSS</p>
                <p><FontAwesomeIcon icon={faJs} /> JS</p>
              </div>
          </div>
          <div className="sm:flex-auto mx-4  m-2">
            <h2 className='heading text-2xl fontWeight-700'>UI </h2>
              <p><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</p>
              <p className=''><FontAwesomeIcon icon="" /> Tailwind UI</p>
              <p><FontAwesomeIcon icon="" /> CHAKRA UI</p> 
              <p><FontAwesomeIcon icon="" /> MATERIAL UI</p> 
              <p><FontAwesomeIcon icon="" /> DAISY UI</p> 
          </div>
        </div>
        <div className='sm:flex md:flex-none md:basis-1/2 mx-4 '>
          <div className="sm:basis-1/2 mx-4 m-2">
            <h2 className='heading text-2xl fontWeight-700'>SERVER SIDE</h2>
            <p><FontAwesomeIcon icon={faPhp} /> PHP</p>
            <p><FontAwesomeIcon icon="" /> ASP.NET</p>
            <p><FontAwesomeIcon icon={faNodeJs} /> NodeJs</p> 
            <p><FontAwesomeIcon icon="" /> Express JS</p> 
            <p><FontAwesomeIcon icon={faReact} /> REACT</p>
          </div>
          <div className="sm:basis-1/2 md:flex-basis-1/4 mx-4 m-2">
            <h2 className='heading text-2xl fontWeight-700'>DATABASE</h2>
            <p><FontAwesomeIcon icon={faDatabase} /> SQL </p>
            <p><FontAwesomeIcon icon={faEnvira} /> NoSQL </p>
          </div>
        </div>
        </div>
        <div className='flex mx-4 '>
          <div className="flex-auto mx-4 m-2">
            <h2 className='heading text-2xl fontWeight-700'>Project Control</h2>
            <p><FontAwesomeIcon icon={faGithub} /> GITHUB</p>
            <p><FontAwesomeIcon icon={faJira} /> JIRA</p>
          </div>
          <div className="flex-auto mx-4 m-2">
            <h2 className='heading text-2xl fontWeight-700'>GRAPHICS</h2>
            <p><FontAwesomeIcon icon={faFigma} /> FIGMA</p>
            <p><FontAwesomeIcon icon={faEnvira} /> LIGHTRROM</p>
          </div>
        </div>
      </div>
         
  )
}

export default Tech
