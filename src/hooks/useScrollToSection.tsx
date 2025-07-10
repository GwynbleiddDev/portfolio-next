'use client'

import { useLenis } from 'lenis/react';
import { RefObject } from 'react';


type ScrollToSectionProps = {
  sectionRef: RefObject<HTMLDivElement | null>
  href: string
  offset: number
  setActiveSection: (href: string, isManual?: boolean) => void
}

export function useScrollToSection() {
  const lenis = useLenis()

  const scrollToSection = ({ sectionRef, href, offset, setActiveSection } : ScrollToSectionProps) => {
    if (lenis && sectionRef.current) {
      lenis.start()
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY + rect.top + offset

      lenis.scrollTo(scrollTop, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        onComplete: () => setActiveSection(href, true)
      })
    }
  }
  return scrollToSection;
}