import './index.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Tech from './components/navbar'
import Contact from './components/contact'
import Thanush from './assets/Thanush.jpeg'
import Software from './assets/software.jpg'
function App() {
  return (
    <div> 
      <Navbar />
      <Hero img={Thanush}/>
      <About img={Software}/>
    </div>
  )
}

export default App
