'use client'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScrollTrigger } from '@/hooks/useLenisScrollTrigger';


// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  
  const heroRef = useRef<HTMLElement>(null);
  const glitchContainerRef = useRef<HTMLDivElement>(null);
  const subtitleContainerRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const scroller = useLenisScrollTrigger();

  useGSAP(() => {
    const ctx = gsap.context(() => { // for react

      gsap.killTweensOf([glitchContainerRef.current, subtitleContainerRef.current, backRef.current]) // clean prev animations

      // PREV STATES
      gsap.set(glitchContainerRef.current, {
        scale: 4,
        opacity: 0,
        top: '50%',
        left: '50%',
        transformOrigin: 'center center',
        y: -15,
      })
      
      gsap.set(subtitleContainerRef.current, {
        left: '50%',
        top: '50%',
        x: 5,
      })

      gsap.set([subtitleContainerRef.current, backRef.current], {
        opacity: 0,
      });

      const tl = gsap.timeline({ 
        ease: 'power2.out',
        scrollTrigger: {
          start: 'top top',
          end: '+=1200',
          scroller, 
          scrub: true,
          pin: heroRef.current,
          pinSpacing: false,
          // markers: true,
        },
      });

      tl // ANIMATIONS
        .to( glitchContainerRef.current,   { scale: 1,           duration: 1.6 }, 0.1 )
        .to( glitchContainerRef.current,   { opacity: 1,         duration: 0.3 }, 0.15)
        .to( subtitleContainerRef.current, { opacity: 1, y: -10, duration: 0.3 }, 1.6 )
        .to( backRef.current,              { opacity: 1,         duration: 0.2 }, 1.9 )
        .to([ 
          glitchContainerRef.current, 
          subtitleContainerRef.current, 
          backRef.current ],               { scale: 1 ,          duration: 1  }, 2.1 )
        .to([ 
          glitchContainerRef.current, 
          subtitleContainerRef.current, 
          backRef.current ],               { scale: 0.9,         duration: 0.6 }, 3.1 )
        .to([ 
          glitchContainerRef.current, 
          subtitleContainerRef.current, 
          backRef.current],                { opacity: 0,         duration: 0.25 }, 3.6 )

    }, heroRef)

    return () => ctx.revert() // clean
  }, { dependencies: [scroller], scope: heroRef })

  return (
    <>
      <section
        id="hero"
        ref={heroRef}
        className="hero relative min-h-screen flex items-center justify-center bg-transparent z-10 overflow-hidden"
      >
        <div
        ref={backRef}
        className="absolute bg-gray-950/50 rounded-2xl py-2 shadow-purple-900/90 border-1 border-purple-900"
        >
          <div className="heading flex flex-col justify-center items-center">
            <h1 className="glitchSim opacity-0 mb-2">ALEJANDRO_VALERA</h1>
            <p className="subSim opacity-0 ">front-end developer</p>
          </div>
        </div>

        <div className="absolute text-center">
          <div ref={glitchContainerRef}>
            <h1 className="glitch title" data-text="ALEJANDRO_VALERA">
              ALEJANDRO_VALERA
            </h1>
            <h1 className="glow title">ALEJANDRO_VALERA</h1>
          </div>

          <div ref={subtitleContainerRef}>
            <p className="subtitle text-indigo-400 text-1xl">
              front-end developer
            </p>
          </div>
        </div>
      </section>
    </>
  );
}