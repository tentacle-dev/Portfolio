import sound from '../../public/assets/Sounds/type.mp3';

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useEffect, useState } from 'react'
import Plx from 'react-plx'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const thanushText = [{
  start : 0 ,
  end : 100, 
  properties : [{
    startValue : 90,
    endVale: 0,
    property : 'rotateY'
  }]
}
]

const Navbar = (props) => {

  const [value , setValue] = useState(0)

  useEffect(() => {
    play()
  } , [value])
  
  function play() {
    const audio = new Audio(sound)
    audio.muted = true;
    audio.play();
  }

  return (
    <nav>
      <div className='navbar bg-sky-900'>
        <div className='navbar-start' onClick={play}>
          <Plx parallaxData={thanushText}>
            <p className=' text-2xl lg:text-3xl write pt-2 text-slate-300' onClick={play}>THANUSH SEELAN</p>
          </Plx>
        </div>
        <div className="navbar-center hidden md:flex md:text-md md:gap-4 md:gap-8 md:ml-36 md:text-md  uppercase">
          <BrowserRouter>
            <Link to='#about' className='hover:text-primary'>
              About Me
            </Link>
            <Link to='#technologies' className='hover:text-primary'>
              Technologies
            </Link>
            <Link to='#project' className='hover:text-primary'>
              Projects
            </Link>
            <Link to='#contact' className='hover:text-primary'>
              Contact
            </Link>
          </BrowserRouter>
        </div>
        <div className='navbar-end'>
          <div className='dropdown dropdown-left'>
            <label tabIndex={0} className="btn btn-ghost md:hidden btn-circle">
              <FontAwesomeIcon icon={faBars} fill="none" />
            </label>
            <ul tabIndex={0} 
              className="menu uppercase menu-compact dropdown-content mt-3 p-2 shadow bg-lime-50 text-black rounded-box  w-36 sm:w-96 h-auto gap-5 p-4 mx-2 text-xl w-max">
                <BrowserRouter>
                  <Link to='#about'>
                    About Me
                  </Link>
                  <Link to='#technologies'>
                    Technologies
                  </Link>
                  <Link to='#project'>
                    Projects
                  </Link>
                  <Link to='#contact'>
                    Contact
                  </Link>
                </BrowserRouter>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
