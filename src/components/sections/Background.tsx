'use client'

import Image from 'next/image';
import { CSSProperties } from 'react';
import { useStars } from '@/hooks/useStars';

export default function Background() {
  
  const { stars, starRefs } = useStars(50, 0.7);

  return (
    <>
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
            <div className="startail-a"></div>
            <div className="startail-b"></div>
            <div className="startail-c"></div>
            <div className="startail-d"></div>
            <div className="startail-e"></div>
          </div>

          <div className="top-lines"></div>

          <div className="sun"></div>

          <Image
            src="/assets/bg/palm-small.svg"
            alt="Palm Small"
            className="palm small"
            width={100}
            height={150}
            priority
          />

          <Image
            src="/assets/bg/palm.svg"
            alt="Palm"
            className="palm"
            width={150}
            height={200}
            priority
          />
        </div>

        <div className="bottom">
          <div className="bottom-overlay"></div>
        </div>

        <div id="stars">
          {stars.map((star, index) => (
            <div
              key={star.id}
              ref={(el) => {starRefs.current[index] = el}}
              className="star"
              style={
                {
                  '--x': `${star.x}px`,
                  '--y': `${star.y}px`,
                  opacity: 0
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div className="scanlines" />
    </>
  );
}