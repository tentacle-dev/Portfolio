import React from 'react'


const Hero = (props) => {
  return (
    <section className="body xl:px-32 lg:h-1/6 ">
      <div className="md:grid px-4 py-8 pb-16 md:grid-cols-12">
        <div className="md:col-span-7 flex px-10">
          <div className="text-center pt-8 text-white justify-center">
            <img src={props.img} className="rounded-full border-4 object-none thanush" alt="Thanush" />
            <span className="">Oh, this is not a NFT</span><br /><span className='text-xs hidden'>( NFTs are ded )</span>
          </div>
        </div>
        <div className='md:col-span-5 text-white text-4xl my-auto text-center'>
          <p>
            MY CODE MAY NOT BE PERFECT
          </p> <br />
          <p>
            BUT ATLEAST IT'S INDENTED
          </p> <br />
          <h1>WHO WANTS TO HIRE ME?</h1>
          <div className=''>
            <a href='' className='btn custom-button-1 text-xs rounded-lg'>MOI PROJECTS</a>
            <a href='' className='btn custom-button-2 rounded-lg'>CONTACT MOI</a>
          </div>
          
        </div>
        
        {/* <div className="">
            <div className='text-white'>
            <p className=" font-bold sm:text-xs md:text-lg lg:text-xl uppercase">My CODE many not be PERFECT,</p><br></br>
            <p className=" font-bold  md:text-lg lg:text-xl uppercase ">but atleast it's indented</p>
            <h1 className=" lg:mb-8 mb-8 sm:mb-24  lg:text-4xl sm:text-1xl font-extrabold tracking-tight md:text-5xl xl:text-4xl">WHO WANTS TO HIRE ME?</h1>
            </div>
            <a href='#' className="btn custom-button-1 mx-4 px-8 py-4 rounded-lg">MOI PROJECTS</a> 
            <a href='#' className="btn custom-button-2 mx-4 px-8 py-4 rounded-lg">CONTACT MOI</a> 
        </div> */}
      </div>
  </section>
  )
}

export default Hero
