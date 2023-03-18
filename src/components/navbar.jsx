import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = (props) => {
  return (
    <>
    <div className='navbar bg-transparent'>
      <div className='navbar-start'>
        <p className='text-3xl write pt-2 text-slate-300'>THANUSH SEELAN</p>
      </div>
      <div className="navbar-center hidden sm:display gap-8 ml-36 text-md  uppercase">
        <BrowserRouter>
          <Link to='#about'>
            <a>About Me</a>
          </Link>
          <Link to='#technologies'>
            <a>Technologies</a>
          </Link>
          <Link to='#project'>
            <a>Projects</a>
          </Link>
          <Link to='#contact'>
            <a>Contact</a>
          </Link>
        </BrowserRouter>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-left'>
          <label tabIndex={0} className="btn btn-ghost sm:hidden btn-circle">
            <FontAwesomeIcon icon={faBars} fill="none" />
          </label>
          <ul tabIndex={0} 
            className="menu uppercase menu-compact dropdown-content mt-3 p-2 shadow bg-lime-50 text-black rounded-box  w-36 sm:w-96 h-auto">
              <BrowserRouter>
                <Link to='#about'>
                  <li><a>About Me</a></li>
                </Link>
                <Link to='#technologies'>
                  <li><a>Technologies</a></li>
                </Link>
                <Link to='#project'>
                  <li><a>Projects</a></li>
                </Link>
                <Link to='#contact'>
                  <li><a>Contact</a></li>
                </Link>
              </BrowserRouter>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
