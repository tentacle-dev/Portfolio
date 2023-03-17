import React from 'react'

const project = (props) => {
  return (
    
    <section id='projects'>
       <input type="checkbox" id="my-modal-1" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <img src={props.img} alt="Image" />
            <p>GitHub Repo - <a href="https://github.com/tentacle-dev/Portfolio" className='underline'>Click to redirect to github</a></p>
          </div>
        </div>
      <h1 className='text-center text-white text-3xl pb-2 uppercase underline decoration-sky-500'>My Projects</h1>
        <div className='grid text-center grid-cols-1 m-4 items-center gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center'> 
        <div className='project-body'>
          <img src={props.img} className="rounded-xl border-2 proj-img img m-auto " alt="Thanush" />
          <p className='text-xl mt-2 italic font-medium'>My P<span className='underline decoration-sky-500'>ortfoli</span>o Web <br /> Application</p>
          <div className="project-text">
            <label href='' htmlFor="my-modal-1" className='btn'>View Project</label>
          </div>
        </div>
        <div className='project-body'>
        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <img src={props.img} alt="Image" />
            <p>GitHub Repo - <a href="https://github.com/tentacle-dev/Portfolio" className='underline'>Click to redirect to github</a></p>
          </div>
        </div>
          <img src={props.img} className="rounded-xl border-2 proj-img img m-auto " alt="Thanush" />
          <p className='text-xl mt-2 italic font-medium'>E<span className='underline decoration-sky-500'>-Commerc</span>e Web <br />Application</p>
          <div className="project-text">
            <label href=''  className='btn' htmlFor='my-modal-2'>View Project</label>
          </div>
        </div>
        <div className='project-body'>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <img src={props.img} alt="Image" />
            <p>GitHub Repo - <a href="https://github.com/tentacle-dev/Portfolio" className='underline'>Click to redirect to github</a></p>
          </div>
        </div>
          <img src={props.img} className="rounded-xl border-2 proj-img img m-auto " alt="Thanush" />
          <p className='text-xl mt-2 italic font-medium'>F<span className='underline decoration-sky-500'>ull Stack</span> Web <br /> Application</p>
          <div className="project-text">
            <label href='' htmlFor="my-modal-3" className='btn'>View Project</label>
          </div>
        </div>

        
        

        </div>
    </section>
  )
}

export default project
