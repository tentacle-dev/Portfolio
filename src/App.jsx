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
import Plx from 'react-plx'

function App() {
  const ParallaxAbout = [
    {
      start: 0,
      end: 350,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
        },
        {
          startValue : 50,
          endValue:0,
          property : 'translateY'
        }
      ]
    },
    {
      start : 10,
      end: 650,
      properties : [
        {
          startValue : 0,
          endValue : 20,
          property: 'translateX'
        }
      ]
    }
  ];
  const ParallaxHero = [
    {
      start: -5,
      end: 40,
      properties: [
        {
          startValue: -600,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
    {
      start:-5,
      end: 60,
      properties:[
        {
          startValue: 0 ,
          endValue: 180,
          property: 'skew'
        }
      ]
    }
  ];
  return (
      <div className="bg-1 pb-4 overflow-x-hidden"> 
          <Navbar />
          <Plx parallaxData={ParallaxHero}>
            <Hero img={Thanush}/>
          </Plx>
          {/* <Plx parallaxData={ParallaxAbout}> */}
            <About img={Software}/>
          {/* </Plx> */}
          <Tech daisyimg={daisy} expressimg={express} />
          <Project img={Thanush}/>
          <Contact img={Software} />
          <Footer />
      </div>
    
  )
}

export default App
