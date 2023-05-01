import React from 'react'
import Modal from './modal'
import data from '../data.json'
import Plx from 'react-plx';

const headParallax = [
  {
    start: 850,
    end: 1500,
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

const project = (props) => {
  return (
    <section id='project' className='mb-8'>
      <div className="text-center">
        <Plx parallaxData={headParallax}>
            <h1 className='headerFont font-2xl'>Projects</h1>
        </Plx>
      </div>
      <div className='grid text-center grid-cols-1 m-4 items-center gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center'> 
        {
          data.map((item ,index) => {
            return (
              <div key={index}>
                  <input type="checkbox" id={item.name} className="modal-toggle" />
                  <Modal num={item.id} name={item.name} img={props.img} title={item.title} navigate={item.link} images={item.innerImages} technologies={item.technologies}/> 
                  <div className='project-body '>
                    <p className='text-xl m-2 italic font-medium underline decoration-sky-500'>{item.title}</p>
                    <img src={item.img} className="rounded-xl border-2 p-2 border-sky-500 proj-img img m-auto w-24 " alt={item.title} />
                    <div className="project-text">
                      <label href='' htmlFor={item.name} className='btn bg-sky-800 translate-y-4'>View Project</label>
                    </div>
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default project
