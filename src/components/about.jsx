import React, { useEffect, useState } from 'react'
import Plx from 'react-plx'

const parallax = [
  {
    start : 200,
    end : 500,
    properties : [
      {
        startValue : 'rgba(0,0,0,0)' ,
        endValue : '#2144af',
        property : 'backgroundColor'
      }
    ]
  }
]
const headParallax = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 50,
        endValue: 0,
        property: "translateY",
      },
      {
        startValue : 100 ,
        endValue : 0,
        property : "rotateX"
      }
    ],
  },
];

const parallaxName = [
  {
    start: 70,
    duration : 450,
    properties : [
      {
        startValue : -190,
        endValue : 0,
        property : 'translateX'
      },
      {
        startValue : 'rgba(1,0,255,0.5)',
        endValue : 'rgba(255,255,255,1)',
        property : 'color'
      },
    ]
  }
]

const About = (props) => {

  const [select , setSelect] = useState(1);
  return (
    <div className='body pb-2' id="about">
      <div className='text-center'>
        <Plx parallaxData={headParallax}>
          <h1 className='headerFont'>About me</h1>
        </Plx>
      </div>
      <div className='md:grid md:grid-cols-12 lg:mx-8 gap-2'>
        <div className=' col-span-7 lg:mx-8 lg:my-8 text-justify p-8 rounded-xl'>
          <div className='grid grid-cols-4 justify-between justify-items-center bg-slate-900 text-sm md:text-medium'>
            <div onClick={() =>  setSelect(0)} className={select === 0 ? 'text-center border-2 rounded-t-lg border-b-4 border-sky-500 min-w-full' : 'text-center min-w-full'}>
              Small
            </div>
            <div onClick={() =>  setSelect(1)} className={select === 1 ? 'text-center border-2 rounded-t-lg border-b-4 border-sky-500 min-w-full' : 'text-center min-w-full'}>
              Medium
            </div>
            <div onClick={() =>  setSelect(2)} className={select === 2 ? 'text-center border-2 rounded-t-lg border-b-4 border-sky-500 min-w-full' : 'text-center min-w-full'}>
              Large
            </div>
            <div onClick={() =>  setSelect(3)} className={select === 3 ? 'text-center border-2 rounded-t-lg border-b-4 border-sky-500 min-w-full' : 'text-center min-w-full'}>
              Xtra Large
            </div>

          </div>
          <h3 className={select === 0 ? 'text-xs header_name' : select === 1 ? 'text-base header_name' : select === 2 ? 'text-xl header_name' : 'text-2xl header_name'}>Hello</h3>
          <div className='flex'>
          <h2 className='lg:text-2xl lg:mt-4 lg:-mr-2 '>I'm </h2>
          <h1 className='font-bold lg:text-4xl pl-2'>THANUSH
          </h1>
          <Plx parallaxData={parallaxName}>
            <span className='hidden lg:inline font-bold lg:text-4xl'>VAR SATHIYASEELAN</span>
          </Plx>
          </div>
            <div className={select === 0 ? 'text-xs ' : select === 1 ? 'text-base ' : select === 2 ? 'text-xl ' : 'text-2xl '}>
            Yeah , thought I’d have lorem ipsum here
            for some time but I thought I'll provide a small glimpse of my life So I earned a degree in <span className='uppercase text-xl text-bold underline decoration-sky-500 kaushan text-primary underline-offset-4 hover:text-white'>software engineering</span>, and web design and development are my passions. I have a solid background in coding languages including HTML, CSS, and JavaScript as well as practical knowledge of front-end frameworks like <span className='text-xl p-1 text-bold underline decoration-sky-500 kaushan text-primary underline-offset-4 hover:text-white'>
              REACT</span> / <span className='text-xl p-1 text-bold underline decoration-sky-500 text-primary kaushan underline-offset-4 hover:text-white'>
              NEXT </span>
             I am familiar with database systems like <span className='text-xl p-1 text-bold underline decoration-sky-500 text-primary kaushan underline-offset-4 hover:text-white'>
              SQL</span> and <span className='text-xl p-1 text-bold underline decoration-sky-500 text-primary kaushan underline-offset-4 hover:text-white'>
              NoSQL</span>. My backend strength has me <span className='text-xl p-1 text-bold underline decoration-sky-500 text-primary kaushan underline-offset-4 hover:text-white'>
              PHP</span> and <span className='text-xl p-1 text-bold underline decoration-sky-500 text-primary kaushan underline-offset-4 hover:text-white'>
              NodeJs</span>
            I'm primarily interested in web development and design, and I've used graphic design software like Figma as well as UI and UX design ideas.
            Overall, I think my enthusiasm for web design and development, together with my programming and design abilities, make me a significant addition to any software development team.
            </div>
            <div className=''>
              If a project is <span className='text-xl p-1 text-bold uppercase underline decoration-sky-500 text-primary kaushan underline-offset-4 hover:text-white'> due early</span>, I would describe myself as a <span className='text-xl p-1 text-bold uppercase underline decoration-sky-500 text-primary kaushan underline-offset-4 hover:text-white'>
              Swift learner</span>, while if I come across a new and intriguing technology, I become an <span className='text-xl p-1 text-bold uppercase underline decoration-sky-500 text-primary kaushan underline-offset-4 hover:text-white'>enthusiastic</span> and <span className='text-xl p-1 text-bold uppercase underline decoration-sky-500 text-primary kaushan underline-offset-4 hover:text-white'>committed learner</span>. I am adaptable to different situations and have the drive to continuously develop my skills in the tech industry.
            </div>
        </div>
        <div className='col-span-5 lg:mt-16 lg:ml-16  rounded-full'>
          <div className='mx-auto lg:w-3/4 w-1/3'>
            <Plx parallaxData={parallax}>
              <div className=''>
                <img src={props.img} className="rounded-full object-none img-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 lg:hover-scale-125 hover:bg-indigo-500 duration-500 h-24"/>
              </div>
            </Plx>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
