import React from 'react'
import data from '../data.json'

function modal(props) {
    var datas = JSON.stringify(data);
    console.log(data)
    console.log(datas)
  return (
    <div className="modal">
        <div className="modal-box relative">
            <label htmlFor={props.name} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <img src={props.img} alt="Image" />
            <p> Hello </p>
            <p>GitHub Repo - <a href={props.navigate} className='underline'>Click to redirect to github</a></p>
        </div>
    </div>
    
  )
}

export default modal
