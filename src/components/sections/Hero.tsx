'use client'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScrollTrigger } from '@/hooks/useLenisScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


export default function Hero() {

  const heroRef = useRef<HTMLElement>(null)
  const glitchContainerRef = useRef<HTMLDivElement>(null)
  const subtitleContainerRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLDivElement>(null)

  const scroller = useLenisScrollTrigger()

  useGSAP(() => {
    const ctx = gsap.context(() => { // for react

      gsap.killTweensOf([glitchContainerRef.current, subtitleContainerRef.current, backRef.current]) // clean prev animations

      // PREV STATES
      gsap.set(glitchContainerRef.current, {
        scale: 4,
        opacity: 0,
        y: -15,
      })
      
      gsap.set(subtitleContainerRef.current, {
        left: '50%',
        top: '50%',
        y: 5,
      })

      gsap.set([subtitleContainerRef.current, backRef.current], {
        opacity: 0,
      })

      const tl = gsap.timeline({ 
        pin: heroRef.current,
        scrollTrigger: {
          start: 'top top',
          end: '+=1300',
          scroller, 
          scrub: true,
          pin: heroRef.current,
          pinSpacing: false,
          // markers: true,
        },
      })

      tl // ANIMATIONS
        .to( glitchContainerRef.current, { 
            scale: 1, 
            duration: 1.6 
          }, 0.1 )
        .to( glitchContainerRef.current, { 
          opacity: 1,
          duration: 0.3 
        }, 0.15)
        .to( subtitleContainerRef.current, { 
          opacity: 1, 
          y: -10, 
          duration: 0.3 
        }, 1.6 )
        .to( backRef.current, { 
            opacity: 1,
            duration: 0.2 
          }, 1.9 )
        .to([ 
          glitchContainerRef.current, 
          subtitleContainerRef.current, 
          backRef.current ], { 
            scale: 1 ,          
            duration: 1.25  
          }, 2.1 )
        .to([ 
          glitchContainerRef.current, 
          subtitleContainerRef.current, 
          backRef.current ], { 
            scale: 0.9, 
            duration: 1 
          }, 3.35 )
        .to([ 
          glitchContainerRef.current, 
          subtitleContainerRef.current, 
          backRef.current], { 
            opacity: 0,
            duration: 0.5 
          }, 4.6 )

    }, heroRef )

    return () => ctx.revert() // clean
  }, { dependencies: [scroller], scope: heroRef })

  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   // Solo ejecuta en el cliente
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center bg-transparent z-10 overflow-hidden"
    >
      <div
        ref={backRef}
        className="absolute bg-gray-950/50 rounded-2xl p-2 shadow-purple-900/90 border-1 border-purple-900"
      >
        <div className="title flex flex-col justify-center items-center">
          <h1 className="glitchSim opacity-0 mt-1">ALEJANDRO_VALERA</h1>
          <p className="subSim opacity-0">front-end developer</p>
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
  );
}