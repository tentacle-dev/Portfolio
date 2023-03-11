import './index.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/technologies'
import Tech from './components/navbar'
import Contact from './components/contact'
import Thanush from './assets/Thanush.jpeg'
function App() {
  return (
    <div> 
      <Navbar />
      <Hero img={Thanush}/>
    </div>
  )
}

export default App
