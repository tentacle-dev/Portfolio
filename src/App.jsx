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

function App() {
  return (
      <div className="bg-1"> 
          <Navbar />
          <Hero img={Thanush}/>
          <About img={Software}/>
          <Tech />
          <Project img={Thanush} />
          <Contact />
          <Footer img={Thanush} />
      </div>
    
  )
}

export default App
