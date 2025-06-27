'use client'

import Image from 'next/image'
import { useState, useEffect, CSSProperties } from 'react'


type Star = {
  id: number
  x: number
  y: number
}

export default function Background() {
  
  const [stars, setStars] = useState<Star[]>([]); 
  
  const createStars = () => {
    
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920 // SSR
    const height = typeof window !== 'undefined' ? window.innerHeight * 0.55 : 1080 * 0.55
    const starCount = 15
    const newStars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.floor(Math.random() * width), 
        y: Math.floor(Math.random() * height)
      })
    }
    setStars(newStars)
  }

  useEffect(() => {
    createStars()
    const updateStars = () => createStars()
    window.addEventListener('resize', updateStars)
    return () => window.removeEventListener('resize', updateStars)
  }, [])

  return (
    <div className="scene">
      <div className="delorean-container">
        
        <Image
          src="/assets/bg/delorean.svg"
          alt="DeLorean"
          className="delorean"
          width={200}
          height={100}
        />
      </div>
      
      <div className="top">
        <div className="startails">
          <div className="startail-r"></div>
          <div className="startail-l"></div>
          <div className="startail-m"></div>
        </div>
        
        <div className="top-lines"></div>
        
        <div className="sun"></div>
        
        <Image
          src="/assets/bg/palm-small.svg"
          alt="Palm Small"
          className="palm small"
          width={100}
          height={150}
        />
        
        <Image
          src="/assets/bg/palm.svg"
          alt="Palm"
          className="palm"
          width={150}
          height={200}
        />
      </div>
      
      <div className="bottom">
        <div className="m0"></div>
        <div className="m1"></div>
        <div className="m2"></div>
        <div className="bottom-overlay"></div>
      </div>
      
      <div id="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={
              {
                '--x': `${star.x}px`,
                '--y': `${star.y}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}