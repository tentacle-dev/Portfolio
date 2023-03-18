import React from 'react'

function carousel(props) {
  return (
    <div>
     <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src={props.img1} className="rounded border-4 object-none img m-auto " alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={props.img2}  className="rounded border-4 object-none img m-auto " alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={props.img3}  className="rounded border-4 object-none img m-auto " alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={props.img4}  className="rounded border-4 object-none img m-auto " alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={props.img5}  className="rounded border-4 object-none img m-auto " alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={props.img6}  className="rounded border-4 object-none img m-auto " alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={props.img7}  className="rounded border-4 object-none img m-auto " alt="Drink" />
  </div>
</div> 
    </div>
  )
}

export default carousel
