import React from 'react'
import Navbar from './components/navbar'
import Content from "./Components/content"
import Aboutme from './Components/Aboutme'
import Teac from './Components/Teac'
import Experience from "./Components/Experience"
import Project from './Components/Project'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className='container mx-auto px-8'>
        <Navbar />
        
        <section id="home" className="pt-28 pb-20">
          <Content />
        </section>

        <section id="about" className="py-20">
          <Aboutme />
        </section>

        <section id="skills" className="py-20">
          <Teac />
        </section>

        <section id="experience" className="py-20">
          <Experience />
        </section>

        <section id="projects" className="py-20">
          <Project />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
