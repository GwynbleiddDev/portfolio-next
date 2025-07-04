'use client'

import { useEffect, useState } from "react";
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
import Footer from "@/components/sections/Footer";


export default function Home() {

  const [ isLoading, setIsLoading ] = useState(true)
  const [ fadeOut, setFadeOut ] = useState(false)
  const [ contentVisible, setContentVisible ] = useState(false)

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

        <Hero />
        <div className="h-[50vh]"/>
        <AboutMe />
        <div className="h-[70vh]"/>
        <Skills />
        <MyJourney />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
