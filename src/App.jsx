// import React from 'react'

import About from "./Components/About"
import Contact from "./Components/Contact"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"
import Story from "./Components/Story"

const App = () => {
  return (
   <main className="relative min-h-screen 
   w-screen overflow-x-hidden ">
     <NavBar/>
     <Hero/>
     <About/>  
     <Features/> 
     <Story/> 
     <Contact/>
     <Footer/>
   </main>
  )
}

export default App