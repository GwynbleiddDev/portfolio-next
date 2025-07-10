'use client'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import City from '../extras/City';
import Heading from '../ui/Heading';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScrollTrigger } from '@/hooks/useLenisScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { useAnimation } from '@/context/AnimationContext';


gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {

  const { animationsEnabled } = useAnimation()
  const aboutRef = useRef<HTMLElement>(null)
  const cityContainerRef = useRef<HTMLDivElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLDivElement>(null)

  const scroller = useLenisScrollTrigger()

  useGSAP(() => {
    if(animationsEnabled) {
      const ctx = gsap.context(() => { // React
        
        gsap.killTweensOf([cityContainerRef.current, textContainerRef.current, backRef.current]) // clean
  
        // gsap.set( backRef.current, {
        //   scale: 1.1,
        //   opacity: 0,
        //   maskImage: `
        //     radial-gradient(
        //       circle at 50% 150%, 
        //       rgb(0, 0, 0) 0%, 
        //       rgba(0, 0, 0, 0) 10%
        //     )
        //   `,
        // })
        
        const tl = gsap.timeline({
          ease: 'power2.out',
          scrollTrigger: {
            start: 'top top',
            end: '+=1100',
            scroller,
            scrub: true,
            pin: aboutRef.current,
            pinSpacing: false,
            // markers: true
          }
        })
  
        tl // ANIMATIONS
          .fromTo( backRef.current, {
            scale: 1.1,
            opacity: 0,
            maskImage: `
              radial-gradient(
                circle at 50% 150%, 
                rgb(0, 0, 0) 0%, 
                rgba(0, 0, 0, 0) 10%
              )
            `,
          },{
            opacity: 1,
            maskImage: `
              radial-gradient(
              circle at 50% 100%,
              rgb(0, 0, 0) 100%,
              rgba(0, 0, 0, 0) 110%
            )`,
            duration: 5,
          })
          .to( backRef.current, { 
            scale: 0.9 , 
            duration: 16 
          }, '<' )
          .fromTo( textContainerRef.current, { y: 20 }, { y: -18 , duration: 16 }, '<' )
          .fromTo( 
            cityContainerRef.current, 
            { 
              opacity: '0',
              maskImage: `
                radial-gradient(
                  circle at 50% 150%, 
                  rgb(0, 0, 0) 0%, 
                  rgba(0, 0, 0, 0) 15%
                )
              `,
            }, { 
              opacity: '1', 
              maskImage: `
                radial-gradient(
                  circle at 50% 100%,
                  rgb(0, 0, 0) 100%,
                  rgba(0, 0, 0, 0) 115%
                )`
              ,
              duration: 2.5,
            }, 3.5
          )
          .to( 
            backRef.current,
            {
              opacity: 1,
              maskImage: `
                radial-gradient(
                circle at 50% 150%, 
                rgb(0, 0, 0, 0) 0%, 
                rgba(0, 0, 0) 10%
              )`,
              duration: 0.01
            }, 7 )
          .to( backRef.current,
            {
              opacity: 0,
              maskImage: `
                radial-gradient(
                  circle at 50% 100%, 
                  rgb(0, 0, 0, 0) 100%, 
                  rgba(0, 0, 0) 110%
                )
              `,
              duration: 4
            }, 12
          )
      }, aboutRef )
  
      return () => ctx.revert() // clean
    } else {
      gsap.set([cityContainerRef.current, textContainerRef.current, backRef.current], {
        scale: 1,
        opacity: 1,
      })
    }
  }, { dependencies: [ scroller, useAnimation ], scope: aboutRef })

  const { t } = useLanguage()

  return (
    <section
      ref={aboutRef}
      className="min-h-screen flex justify-center items-center bg-transparent relative z-10"
    >
      <div
        ref={backRef}
        className="max-w-6xl py-6 px-8 mx-6 border-1 border-purple-900 flex flex-col md:flex-row items-center gap-8 bg-gray-950 shadow-lg shadow-purple-900/50 rounded-lg about-me-content"
      >
        <div
          ref={textContainerRef}
          className="md:w-1/3 text-center md:text-left"
        >
          <Heading color="text-purple-400" mb="mb-8">
            {t.about.title}
          </Heading>
          <p className="text-lg text-gray-300">
            {t.about.text}
          </p>
        </div>

        <div
          ref={cityContainerRef}
          className="md:w-2/3 w-full flex justify-center mx-auto"
        >
          <City />
        </div>
      </div>
    </section>
  )
}