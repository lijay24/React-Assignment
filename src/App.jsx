import { useState } from 'react'
import Hero from './components/hero/Hero'
import itBerriers from './components/itberries/ItBerries'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ItBerries from './components/itberries/ItBerries'
import About from './components/about/About'
import Service from './components/services/Service'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'


// js enviromrnt
function App() {
  
// js environ
  return (
    
      <>
    {/* jsx environ */}
    <Hero />
    <ItBerries />
    <About/>
  <Service />
  <Skills />
  <Portfolio />
  <Contact />

      </>
    
  
  )
}
//js environ
export default App
