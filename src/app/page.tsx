'use client'

import AboutMe from "@/components/sections/AboutMe";
import Background from "@/components/sections/Background";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import MyJourney from "@/components/sections/MyJourney";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import AOS from 'aos'
import { useEffect, useState } from "react";
import LoadingPage from "@/components/extras/LoadingPage";
import NavBar from "@/components/ui/NavBar";


export default function Home() {

  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      anchorPlacement: 'top-center',
    })

    const loadResources = async () => {
      await document.fonts.ready
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false);
    }
    loadResources()
  }, [])

  if(isLoading) {
    return <LoadingPage />
  }

  return (
    <>
      <Background />
      <NavBar /> 
      
      <Header />
      
      <AboutMe />
      <Skills />
      <MyJourney />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}
