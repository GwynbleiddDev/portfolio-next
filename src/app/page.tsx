'use client'

import { useEffect, useState, useRef } from "react";
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
        <NavBar />
        
        <div ref={heroRef}> <Hero /> <div className="h-[50vh]" /> </div>
        <div ref={aboutRef}> <AboutMe /> <div className="h-[25vh]" /> </div>
        <div ref={skillsRef}> <Skills /> </div>
        <div ref={journeyRef}> <MyJourney /> </div>
        <div ref={projectsRef}> <Projects /> <div className="h-[60vh]" /> </div>
        <div ref={contactRef}> <Contact /> </div> 
        
        <DownIcon contactRef={contactRef.current} />
      </div>
    </>
  )
}
