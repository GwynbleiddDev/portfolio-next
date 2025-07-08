import Image from "next/image";
import Heading from "../ui/Heading";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScrollTrigger } from '@/hooks/useLenisScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

export default function MyJourney() {

  const journeyRef = useRef<HTMLElement>(null)
  const backRef = useRef<HTMLDivElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const scroller = useLenisScrollTrigger()

  useGSAP(() => {
    const ctx = gsap.context(() => { // React
      
      gsap.killTweensOf([journeyRef.current, imageContainerRef.current, textContainerRef.current, backRef.current]) // clean
      
      const tl = gsap.timeline({
        ease: 'power2.out',
        scrollTrigger: {
          start: 'top top',
          scroller,
          scrub: true,
          pin: journeyRef.current,
          pinSpacing: false,
          // markers: true
        }
      })

      tl // ANIMATIONS
        .fromTo( backRef.current, {
          scale: 0.5,
          opacity: 0,
          top: '50%',
          left: '50%',
          y: 0
        }, {
          opacity: 1,
          duration: 2
        })
        .to( backRef.current, {
          scale: 1,
          duration: 4,
        }, '<' )
        .to( backRef.current, { 
          scale: 1.05 , 
          duration: 10
        }, 4 )
        .fromTo( textContainerRef.current, {
          opacity: 0,
          y: 10
        }, {
          opacity: 1,
          duration: 1
        }, 2 )
        .to( textContainerRef.current, {
          y: -10,
          duration: 14
        }, '<')
        .fromTo( 
          imageContainerRef.current, 
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
            duration: 3,
          }, 2.5 )
        .to( backRef.current, { opacity: 0 , duration: 3 }, 14 )

    }, journeyRef )

    return () => ctx.revert() // clean
  }, { dependencies: [ scroller ], scope: journeyRef })

  return (
    <section
      ref={journeyRef}
      id="journey"
      className="h-screen flex items-center justify-center bg-transparent relative z-10"
    >
      <div
        ref={backRef}
        className="max-w-6xl mx-6 md:mx-20 gap-4 md:gap-10 p-4 md:p-10 flex flex-col md:flex-row items-center bg-gray-950/90 shadow-lg shadow-purple-900/50 rounded-lg border-1 border-purple-900"
      >
        <div
          ref={imageContainerRef}
        >
          <Image
            className="w-full md:w-500 lg:w-1000 rounded-lg"
            src="/assets/index/journey.gif"
            alt="journey gif"
            width={100}
            height={200}
            unoptimized
          />
        </div>

        <div
          ref={textContainerRef}
          className="text-center md:text-right"
        >
          
          <Heading
            color="text-blue-500"
            mb="mb-6"
          >My Journey</Heading>

          <p className="text-lg text-gray-300">
            I completed courses on platforms like Udemy where I learned to build
            web applications from scratch. I mastered creating responsive
            websites, languages like JavaScript and Typescript, Frameworks like React and Nextjs 
            and building databases with MySQL and connecting APIs.
            Currently, I am exploring Next.js and Nest.js to expand my skills.
          </p>
        </div>
      </div>
    </section>
  );
}
