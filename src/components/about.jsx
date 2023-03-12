import React from 'react'

const About = (props) => {
  return (
    <div className='body pb-2' id="about">
      <h1 className='text-center text-white text-3xl pb-2 underline-hover uppercase'>About Me</h1>
      <div className='md:grid md:grid-cols-12 mx-8'>
        <div className=' col-span-7 text-white mx-8 my-8 text-justify inline '>
            Yeah , thought I’d have lorem ipsum here
            for some time but I though of filling it with something So I just earned a degree in software engineering, and web design and development are my passions. I have a solid background in coding languages including HTML, CSS, and JavaScript as well as practical knowledge of front-end frameworks like React.
            I have a degree in software engineering, therefore I am familiar with database systems like
            I'm primarily interested in web development and design, and I've used graphic design software like Figma as well as UI and UX design ideas.
            Overall, I think my enthusiasm for web design and development, together with my programming and design abilities, make me a significant addition to any software development team.
        </div>
        <div className='col-span-5 mt-8 '>
          <div className='glass'>
            <img src={props.img} className="rounded object-none img-2"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
