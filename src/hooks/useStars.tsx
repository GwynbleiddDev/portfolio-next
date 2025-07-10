'use client'

import { useState, useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { useAnimation } from '@/context/AnimationContext';


export type Star = {
  id: number
  x: number
  y: number
}

export const useStars = (starCount: number, heightRatio: number) => {
  
  const { animationsEnabled } = useAnimation()
  const [ stars, setStars ] = useState<Star[]>([])
  const starRefs = useRef<(HTMLDivElement | null)[]>([])

  const createStars = useCallback(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920
    const height = typeof window !== 'undefined' ? window.innerHeight * heightRatio : 1080 * heightRatio
    const count = animationsEnabled ? starCount : Math.floor(starCount / 2)
    const newStars: Star[] = []
    for (let i = 0; i < count; i++) {
      newStars.push({
        id: i,
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
      });
    }

    setStars(newStars);
  }, [heightRatio, animationsEnabled, starCount])

  useEffect(() => {
    createStars()
    const updateStars = () => createStars()
    window.addEventListener('resize', updateStars)
    return () => window.removeEventListener('resize', updateStars)
  }, [createStars])

  useEffect(() => {
    const currentStarRefs = starRefs.current
    if(animationsEnabled) {
      currentStarRefs.forEach((starRef) => {
        if (starRef) {
          gsap.to(starRef, {
            opacity: 1,
            scale: 0.5 + Math.random() * 0.5,
            duration: 2 + Math.random() * 3, 
            delay: Math.random() * 2, 
            ease: 'sine.inOut', 
            repeat: -1, 
            yoyo: true, 
            repeatDelay: Math.random() * 3,
          })
        }
      })
    } else {
      currentStarRefs.forEach((starRef) => {
        if (starRef) {
          gsap.set(starRef, {
            opacity: 0.5 + Math.random() * 0.5,
            scale: 0.5 + Math.random() * 0.5
          })
        }
      })
    }
      return () => {
        currentStarRefs.forEach((starRef) => {
          if (starRef) {
            gsap.killTweensOf(starRef)
          }
        })
      }
  }, [animationsEnabled, stars])

  return { stars, starRefs }
}