import React from 'react'
import tech from '../data.json'


function modal(props) {
    var datas = JSON.stringify(tech);
    console.log(props.num)
   
    const renderData = (arrayToMap) => {
      return arrayToMap.map( item => {
        if (item.id == props.num){
          return (
                  <div key={item.id}>
                    <p className='text-center'>{item.title}</p>
                    <div className='carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box'>
                    {
                        item.images.map( (picture,index) => {
                          var count = 0;
                            return (
                              <>
                                <img className='w-96 carousel-item' src={picture} key={picture} id={index} />
                                <div className="absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/3">
                                </div>
                              </>
                            )
                          }
                        )
                      }
                    </div>
                    <figcaption className='lg:text-xs'>Please use your keyboard to scroll over image</figcaption>
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {
                        item.technologies.map( technology => {
                          var colortext = '#' 
                          +Math.floor(Math.random()*16).toString(16) 
                          +Math.floor(Math.random()*16).toString(16) 
                          +Math.floor(Math.random()*16).toString(16) 
                          +Math.floor(Math.random()*16).toString(16) 
                          +Math.floor(Math.random()*16).toString(16) 
                          +Math.floor(Math.random()*16).toString(16);

                          return (
                          <p className='badge' style={{color:colortext}} key={technology}>
                            {technology}
                          </p>
                          )
                          }
                        )
                      }
                    </div>
                    <p>GitHub Repo - <a href={item.link} className='underline'>Click to redirect to github</a></p>

                    
                   
                  </div>
            )
          }
        }
      )
    }

  return (
    <div className="modal">
        <div className="modal-box relative">
            <label htmlFor={props.name} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            {
              renderData(tech)
            }
        </div>
    </div>
    
  )
}

export default modal
