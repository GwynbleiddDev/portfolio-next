'use client'

import { useEffect, useRef, useState } from "react";
import AOS from 'aos'
import LoadingPage from "@/components/extras/LoadingPage";
import Background from "@/components/sections/Background";
import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import MyJourney from "@/components/sections/MyJourney";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { ChevronDownIcon } from "@heroicons/react/24/outline";


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
  const chevronRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      anchorPlacement: 'top-center',
    })

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

    // Hide ChevronDownIcon when Contact section is in view
    const handleScroll = () => {
      const contactSection = document.getElementById('contact')
      const chevron = document.getElementById('chevron-down-icon')
      if (contactSection && chevron) {
      const rect = contactSection.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      chevron.style.opacity = inView ? '0' : '1'
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once in case already in view
    setTimeout(handleScroll, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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

        <Hero
          ref={heroRef} 
        />
        <div className="h-[50vh]"/>
        <AboutMe
          ref={aboutRef} 
        />
        <div className="h-[25vh]"/>
        <Skills 
          ref={skillsRef} 
        />
        <MyJourney
          ref={journeyRef}
        />
        <Projects 
          ref={projectsRef} 
        />
        <div className="h-[60vh]"/> 
        <Contact
          ref={contactRef}
        />

        <div 
          ref={chevronRef}
          className="fixed transition-opacity duration-500 bottom-0 right-1/2 translate-x-1/2"
        >
          <ChevronDownIcon 
            id="chevron-down-icon"
            className="h-12 w-12 text-indigo-200 arrow" 
          />
        </div>
      </div>
    </>
  )
}
