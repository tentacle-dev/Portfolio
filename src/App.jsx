import './index.css'
import './app.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Tech from './components/technologies'
import Contact from './components/contact'
import Project from './components/project'
import Thanush from '../public/assets/Thanush.jpeg'
import Software from '../public/assets/myAvatar.svg'
import daisy from '../public/assets/daisy.png'
import express from '../public/assets/express.png'
import Footer from './components/footer'

function App() {
  return (
      <div className="bg-1 pb-4 overflow-x-hidden"> 
          <Navbar />
            <Hero img={Thanush}/>
            <About img={Software}/>
          <Tech daisyimg={daisy} expressimg={express} />
          <Project img={Thanush}/>
          <Contact img={Software} />
          <Footer />
      </div>
    
  )
}

export default App
