import './index.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Tech from './components/technologies'
import Contact from './components/contact'
import Project from './components/project'
import Thanush from './assets/Thanush.jpeg'
import Software from './assets/software.jpg'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

function App() {
  return (
      <div> 
        <Navbar />
          <Hero img={Thanush}/>
          <About img={Software}/>
          <Tech />
          <Project />
      </div>
    
  )
}

export default App
