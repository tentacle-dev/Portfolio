import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'


const Navbar = (props) => {
  return (
    <div className="navbar bg-base-100 flex flex-row flex-wrap nav">
      <div className='basis-1/4'>
        <p className='text-3xl write pt-2 text-slate-300'>THANUSH SEELAN</p>
      </div>
      <BrowserRouter>
        <div className='basis-1/2'>
          <ul className='flex  flex-wrap flex-row'>
            <Link to='#about'>
              {/* <li className='basis-1/4'><a href="" className='basis-1/4'>About me</a></li> */}
            </Link>
            <Link to='#technologies'>
              {/* <li className='basis-1/4'><a href="" className='basis-1/4'>Technologies</a></li> */}
            </Link>
            <Link to='#projects'>
              {/* <li className='basis-1/4'><a href="" className='basis-1/4'>Projects</a></li> */}
            </Link>
          </ul>
        </div>
      </BrowserRouter>
      <div className='basis-1/4 pt-2'>
        
      </div>
      
    </div>
  )
}

export default Navbar
