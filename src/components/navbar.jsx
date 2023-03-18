import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = (props) => {
  return (
    <nav>
    <div className='navbar bg-transparent'>
      <div className='navbar-start'>
        <p className='text-3xl write pt-2 text-slate-300'>THANUSH SEELAN</p>
      </div>
      <div className="navbar-center hidden md:flex md:text-md md:gap-4 md:gap-8 md:ml-36 md:text-md  uppercase">
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
          <Link to='#contact'>Contact
          </Link>
        </BrowserRouter>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-left'>
          <label tabIndex={0} className="btn btn-ghost md:hidden btn-circle">
            <FontAwesomeIcon icon={faBars} fill="none" />
          </label>
          <ul tabIndex={0} 
            className="menu uppercase menu-compact dropdown-content mt-3 p-2 shadow bg-lime-50 text-black rounded-box  w-36 sm:w-96 h-auto">
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
