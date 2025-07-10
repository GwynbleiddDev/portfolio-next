import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScrollTrigger } from '@/hooks/useLenisScrollTrigger';
import { skills } from "@/data/skills";
import SkillCard from "../items/SkillCard";
import Heading from "../ui/Heading";
import { useLanguage } from '@/context/LanguageContext';
import { useAnimation } from '@/context/AnimationContext';


gsap.registerPlugin(ScrollTrigger)

export default function Skills() {

  const { animationsEnabled } = useAnimation()
  const skillRef = useRef<HTMLElement>(null)
  const backRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<(HTMLDivElement | null)[]>([])

  const scroller = useLenisScrollTrigger()

  useGSAP(() => {
    if(animationsEnabled) {
      const ctx = gsap.context(() => { // React

        gsap.killTweensOf([skillRef.current, backRef.current, cardRef.current]) // clean

        const tl = gsap.timeline({
          ease: 'power2.out',
          scrollTrigger: {
            start: 'top top',
            scroller,
            scrub: true,
            pin: skillRef.current,
            pinSpacing: false,
            // markers: true
          }
        })

        tl
          .fromTo( backRef.current, {
            opacity: 0,
            scale: 1.1,
            maskImage: `
              radial-gradient(
                circle at 50% 150%, 
                rgb(0, 0, 0) 0%, 
                rgba(0, 0, 0, 0) 10%
              )
            `,
          },{
            scale: 1,
            duration: 30
          })
          .to( backRef.current, {
            opacity: 1,
            maskImage: `
              radial-gradient(
              circle at 50% 100%,
              rgb(0, 0, 0) 100%,
              rgba(0, 0, 0, 0) 110%
            )`,
            duration: 5,
          }, '<' )
          .fromTo( cardRef.current, {
              opacity: 0,
              y: 10
            },{
            opacity: 1,
            y: 0,
            stagger: {
              each: 0.6, 
              from: 'start',
            },
            duration: 1,
          }, 5 )
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
            }, 25 )
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
            }, 26
          )

      }, skillRef )

      return () => ctx.revert() // clean
    } else {
      gsap.set([backRef.current, cardRef.current], {
        scale: 1,
        opacity: 1,
      })
    }
  }, { dependencies: [ scroller, useAnimation ], scope: skillRef })

  const { t } = useLanguage()

  return (
    <section
      ref={skillRef}
      className="min-h-screen flex items-center bg-transparent relative z-10 p-7 overflow-hidden"
    >
      <div
        ref={backRef}
        className="max-w-6xl mx-auto text-center bg-gray-950/40 p-6 md:p-8 shadow-lg shadow-purple-900/50 border-1 border-purple-900 rounded-lg"
      >

        <Heading
          color="text-indigo-400"
          mb="mb-8"
        >{t.skills.title}</Heading>

        <div
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-6 md:gap-12 mx-auto"
        >
          {skills.map((skill, i) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              image={skill.image} 
              ref={(el) => { cardRef.current[i] = el }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
