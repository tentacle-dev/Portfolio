import React from 'react'

const project = (props) => {
  return (
    <section id='projects'>
      <h1 className='text-center text-white text-3xl pb-2 uppercase'>My Projects</h1>
        <div className='grid text-center grid-cols-1 m-4 items-center gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center'> 
        <div className='project-body'>
          <img src={props.img} className="rounded-xl border-2 proj-img img m-auto " alt="Thanush" />
          <p className='text-xl mt-2 italic font-medium'>My P<span className='underline decoration-sky-500'>ortfoli</span>o Web Application</p>
          <div class="project-text">
            <a href='' className='btn'>View Project</a>
          </div>
        </div>
        <div className='project-body'>
          <img src={props.img} className="rounded-xl border-2 proj-img img m-auto " alt="Thanush" />
          <p className='text-xl mt-2 italic font-medium'>E<span className='underline decoration-sky-500'>-Commerc</span>e Web Application</p>
          <div class="project-text">
            <a href='' className='btn'>View Project</a>
          </div>
        </div>
        <div className='project-body'>
          <img src={props.img} className="rounded-xl border-2 proj-img img m-auto " alt="Thanush" />
          <p className='text-xl mt-2 italic font-medium'>F<span className='underline decoration-sky-500'>ull Stack</span> Web Application</p>
          <div class="project-text">
            <a href='' className='btn'>View Project</a>
          </div>
        </div>

        
        

        </div>
    </section>
  )
}

export default project
