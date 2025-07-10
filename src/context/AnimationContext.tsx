'use client'

import { createContext, useContext, useState, useEffect } from 'react';

type AnimationContextType = {
  animationsEnabled: boolean
  toggleAnimations: () => void
}

const AnimationContext = createContext<AnimationContextType>({
  animationsEnabled: true,
  toggleAnimations: () => {},
})

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('animationsEnabled')
    if (saved !== null) {
      setAnimationsEnabled(JSON.parse(saved))
    } else {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setAnimationsEnabled(!prefersReducedMotion)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('animationsEnabled', JSON.stringify(animationsEnabled))
    document.body.classList.toggle('no-animations', !animationsEnabled)
  }, [animationsEnabled])

  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev)
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  return useContext(AnimationContext)
}