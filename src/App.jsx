import './index.css'
import './index.scss'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Tech from './components/technologies'
import Contact from './components/contact'
import Project from './components/project'
import Thanush from './assets/Thanush.jpeg'
import Software from './assets/software.jpg'
import daisy from './assets/daisy.png'
import express from './assets/express.png'
import Carousel from './components/carousel'
import Map from './components/Map'

function App() {
  return (
      <div className="bg-1  pb-4"> 
          <Navbar />
          <Hero img={Thanush}/>
          <About img={Software}/>
          <Tech daisyimg={daisy} expressimg={express} />
          <Project img={Thanush} />
          <Contact img={Software} />
      </div>
    
  )
}

export default App
