'use client'

import { useEffect, useState, useRef, RefObject } from "react";
import { useAnimation } from "@/context/AnimationContext";
import LoadingPage from "@/components/extras/LoadingPage";
import Background from "@/components/sections/Background";
import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import MyJourney from "@/components/sections/MyJourney";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import DownIcon from "@/components/ui/DownIcon";


export default function Home() {

  const { animationsEnabled } = useAnimation()

  const [ isLoading, setIsLoading ] = useState(true)
  const [ fadeOut, setFadeOut ] = useState(false)
  const [ contentVisible, setContentVisible ] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const journeyRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadResources = async () => {
      await document.fonts.ready
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setFadeOut(true)
      setTimeout(() => {
        setIsLoading(false)
        setContentVisible(true)
      }, 500)
    }
    loadResources()
  }, [])

  return (
    <>
      {isLoading && <LoadingPage fadeOut={fadeOut} />} 
      
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      > 
        <Background />
        <NavBar
          heroRef={heroRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          journeyRef={journeyRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        
        <div 
          id='hero' 
          ref={heroRef}
        > <Hero /> {animationsEnabled && <div className="h-[50vh]"/>} </div> 
        <div 
          id="about" 
          ref={aboutRef}
        > <AboutMe /> {animationsEnabled && <div className="h-[30vh]"/>} </div>
        <div 
          id="skills" 
          ref={skillsRef}
        > <Skills /> {animationsEnabled && <div className="h-[30vh]"/>} </div>
        <div 
          id="journey" 
          ref={journeyRef}
        > <MyJourney /> {animationsEnabled && <div className="h-[30vh]"/>} </div>
        <div 
          id="projects" 
          ref={projectsRef}
        > <Projects /> {animationsEnabled && <div className="h-[50vh]"/>} </div>
        <div 
          id="contact" 
          ref={contactRef}
        > <Contact /> </div> 
        
        <DownIcon contactRef={contactRef as RefObject<HTMLDivElement | null>} />
      </div>
    </>
  )
}
