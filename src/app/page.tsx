import Hero from './component/hero/page'
import About from './component/about/page'
import Projects from './component/projects/page'

import React from 'react'
import Skills from './component/skills/page'
import Contact from './component/contact/page'

const Page = () => {
  return (
    <div>
      
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Page