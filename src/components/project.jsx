import React from 'react'

const project = (props) => {
  return (
    <section id='projects'>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
                <a href='' ><img src={props.thanush} className="rounded-box rounded-full border-4 object-none img" /></a>
            </div> 
            <div className="carousel-item">
                <img src={props.software} className="rounded-box rounded-full border-4 object-none img" />
            </div> 
        </div>
    </section>
  )
}

export default project
