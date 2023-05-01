import React, { useEffect, useState } from 'react';
import sound from '../assets/Sounds/type.mp3'
const PlxTut = () => {


  function play() {
    new Audio(sound).play()
  }

  return (
    <div onClick={play}>
      <button>Play Sound</button>
    </div>
  )
}

export default PlxTut
