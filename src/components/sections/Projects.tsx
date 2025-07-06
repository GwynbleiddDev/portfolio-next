import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScrollTrigger } from "@/hooks/useLenisScrollTrigger";
import ProjectCard from "../items/ProjectCard"
import { projects } from "@/data/projects"
import Heading from "../ui/Heading"


gsap.registerPlugin(ScrollTrigger)

export default function Projects() {

  const projectsRef = useRef<HTMLElement>(null)
  const backRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<(HTMLDivElement | null)[]>([])

  const scroller = useLenisScrollTrigger()

  useGSAP(() => {
    const ctx = gsap.context(() => { // React

      gsap.killTweensOf([projectsRef.current, backRef.current]) // clean

      gsap.set( backRef.current, {
        opacity: 0,
        scale: 1,
        maskImage: `
          radial-gradient(
            circle at 50% 150%, 
            rgb(0, 0, 0) 0%, 
            rgba(0, 0, 0, 0) 10%
          )
        `,
      })

      gsap.set( cardRef.current, {
        opacity: 0,
        y: 10
      })

      const tl = gsap.timeline({
        ease: 'power2.out',
        scrollTrigger: {
          start: 'top top',
          scroller,
          scrub: true,
          pin: projectsRef.current,
          pinSpacing: false,
          // markers: true
        }
      })

      tl
        .to( backRef.current, {
          scale: 0.9,
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
        .to( cardRef.current, {
          opacity: 1,
          y: 0,
          stagger: {
            each: 0.6, 
            from: 'start',
          },
          duration: 1,
        },
        5 )
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
            duration: 0.1
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
            duration: 5
          }, 26
        )

    }, projectsRef )

    return () => ctx.revert() // clean
  }, { dependencies: [ scroller ], scope: projectsRef })

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="min-h-screen flex items-center p-4 md:p-6 bg-transparent relative z-10"
    >
      <div
        ref={backRef}
        className="max-w-6xl mx-auto p-4 text-center bg-gray-950/20 shadow-lg border-1 rounded-lg border-purple-900 shadow-purple-900"
      >
          <Heading
            color="text-indigo-400"
            mb="mb-6"
          >Projects</Heading>

        <div
          id="projectGrid"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.name}
              name={project.name}
              image={project.image}
              link={project.link}
              type={project.type}
              ref={(el) => { cardRef.current[i] = el }}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
