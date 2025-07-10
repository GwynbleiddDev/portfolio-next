"use client"

import { useAnimation } from "@/context/AnimationContext";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { RefObject } from "react";


type HeroToggleProps = {
  isOpen: boolean;
  heroRef: RefObject<HTMLDivElement | null>;
  setActiveSection: (href: string, isManual?: boolean) => void;
}

export default function HeroToggle({ 
  isOpen, heroRef, setActiveSection }: HeroToggleProps
){

  const { animationsEnabled } = useAnimation()

  const scrollToSection = useScrollToSection()

  const handleClick = () => {
    if(heroRef.current) {
      scrollToSection({
        sectionRef: heroRef,
        href: '#hero',
        offset: animationsEnabled ? 500 : 0,
        setActiveSection,
      })
    }
  }

  return (
    <>
      <div className="fixed z-60 top-10 left-10">
        <button
          onClick={handleClick}
          className="text-indigo-200 hover:text-white transition-colors duration-500 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`inline-block transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="title text-2xl md:text-3xl tracking-[-0.075em] text-indigo-200">AV</h3>
          </span>
        </button>
      </div>
    </>
  )
}
