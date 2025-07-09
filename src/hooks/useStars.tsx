'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';

export type Star = {
  id: number;
  x: number;
  y: number;
};

export const useStars = (starCount: number, heightRatio: number) => {
  
  const [ stars, setStars ] = useState<Star[]>([])
  const starRefs = useRef<(HTMLDivElement | null)[]>([])

  const createStars = useCallback(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920
    const height = typeof window !== 'undefined' ? window.innerHeight * heightRatio : 1080 * heightRatio
    const newStars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
      });
    }

    setStars(newStars);
  }, [starCount, heightRatio])

  useEffect(() => {
    createStars()
    const updateStars = () => createStars()
    window.addEventListener('resize', updateStars)
    return () => window.removeEventListener('resize', updateStars)
  }, [createStars])

  useEffect(() => {
    const currentStarRefs = starRefs.current
    currentStarRefs.forEach((starRef) => {
      if (starRef) {
        gsap.to(starRef, {
          opacity: 1,
          scale: 0.5 + Math.random() * 0.5,
          duration: 2 + Math.random() * 4, 
          delay: Math.random() * 3, 
          ease: 'sine.inOut', 
          repeat: -1, 
          yoyo: true, 
          repeatDelay: Math.random() * 3,
        })
      }
    })

    return () => {
      currentStarRefs.forEach((starRef) => {
        if (starRef) {
          gsap.killTweensOf(starRef)
        }
      })
    }
  }, [stars])

  return { stars, starRefs }
};