import { useEffect, useState, useRef } from 'react';


export function useActiveSection(defaultSection = '') {
  
  const [ activeSection, setActiveSection ] = useState(defaultSection)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            const newHash = `#${sectionId}`
            setActiveSection(newHash)
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, '', newHash)
            }
          }
        })
      },
      { root: null, threshold: 0.2, rootMargin: '-20% 0px -20% 0px' }
    )
    observerRef.current = observer

    const sections = document.querySelectorAll('main[id], section[id]')
    sections.forEach((section) => observer.observe(section))

    const initialHash = window.location.hash || defaultSection
    setActiveSection(initialHash)
    setTimeout(() => {
      document.querySelector(initialHash)?.scrollIntoView({ behavior: 'smooth' })
    }, 0)

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [defaultSection])

  return [activeSection, setActiveSection] as const
}