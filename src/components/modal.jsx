import React from 'react'


function modal(props) {
   
    // const renderData = (arrayToMap) => {
    //   return arrayToMap.map( item => {
    //     if (item.id == props.num){
    //       return (
    //               <div key={item.id}>
    //                 <p className='text-center'>{item.title}</p>
    //                 <div className='carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box'>
    //                 {
    //                     item.images.map( (picture,index) => {
    //                       var count = 0;
    //                         return (
    //                           <>
    //                             <img className='w-96 carousel-item' src={props.img} key={picture} id={index} />
    //                             <div className="absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/3">
    //                             </div>
    //                           </>
    //                         )
    //                       }
    //                     )
    //                   }
    //                 </div>
    //                 <figcaption className='lg:text-xs'>Please use your keyboard to scroll over image</figcaption>
    //                 <div className='flex flex-wrap gap-2 mt-2'>
    //                   {
    //                     item.technologies.map( technology => {
    //                       var colortext = '#' 
    //                       +Math.floor(Math.random()*16).toString(16) 
    //                       +Math.floor(Math.random()*16).toString(16) 
    //                       +Math.floor(Math.random()*16).toString(16) 
    //                       +Math.floor(Math.random()*16).toString(16) 
    //                       +Math.floor(Math.random()*16).toString(16) 
    //                       +Math.floor(Math.random()*16).toString(16);

    //                       return (
    //                       <p className='badge' style={{color:colortext}} key={technology}>
    //                         {technology}
    //                       </p>
    //                       )
    //                       }
    //                     )
    //                   }
    //                 </div>
    //                 <p>GitHub Repo - <a href={item.link} className='underline'>Click to redirect to github</a></p>
    //               </div>
    //         )
    //       }
    //     }
    //   )
    // }

  return (
    <div className="modal">
        <div className="modal-box relative min-h-fit">
            <label htmlFor={props.name} className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-700 hover:bg-red-900">✕</label>
            <div className='text-center underline underline-sky-500 my-4 kalam decoration-dashed decoration-sky-500 text-2xl uppercase text-slate-100'>
                {props.title}
              </div>
            <div className=''>
              <div className='h-56 lg:80 carousel carousel-vertical rounded-lg max-w-md bg-neutral ml-2'>
                {
                  props.images.map((img , index) => {
                    return (
                           <img className='w-max carousel-item my-2 mx-2' src={img} key={img} id={index} />
                    )
                  })
                }
              </div>
              <figcaption className='lg:text-xs'>Please scroll over the images</figcaption>
              
              {
                    <div className='flex flex-wrap gap-2 my-4 justify-center'>
                     {
                       props.technologies.map( technology => {
                         var colortext = '#' 
                         +Math.floor(Math.random()*16).toString(16) 
                         +Math.floor(Math.random()*16).toString(16) 
                         +Math.floor(Math.random()*16).toString(16) 
                         +Math.floor(Math.random()*16).toString(16) 
                         +Math.floor(Math.random()*16).toString(16) 
                         +Math.floor(Math.random()*16).toString(16);
                
                         return (
                         <p className='badge uppercase hover:scale-150 hover:bg-red-950 hover:text-white' style={{color:colortext}} key={technology}>
                           {technology}
                         </p>
                         )
                         }
                       )
                     }
                    </div>
              }

              
              <div className='text-white'> GIT - Repo <a href={props.navigate}>
                {props.navigate}
                </a>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default modal
