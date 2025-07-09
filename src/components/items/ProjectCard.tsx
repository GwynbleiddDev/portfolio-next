import Image from "next/image"
import React, { Ref, forwardRef } from "react";


type ProjectCardProps = {
  name: string,
  link: string,
  image: string,
  type?: string
}

export default forwardRef( function ProjectCard(
  {name, link, image, type}: ProjectCardProps,
  ref: Ref<HTMLDivElement>
) {

  return (
    <div
      ref={ref}
      className="bg-[#0d0d0d] border md:m-2 md:p-2 border-indigo-500/50 rounded-lg flex flex-col items-center"
    >
      <h3 
        className="text-[1.05rem] md:text-xl font-semibold text-indigo-300"
      >{name}</h3>
            <a 
            href={link} 
            target="_blank"
            >
            <Image 
              className="w-20 md:w-35 my-2 rounded-lg" 
              src={
              type === "redes"
                ? `/assets/redes/${image}.svg`
                : `/assets/projects/${image}.png`
              }
              alt="imagen proyecto"
              width={150}
              height={100}
            />
            </a>
          <p className="text-white text-sm">
            {
              type === 'redes' ? '' : type
            }
          </p>
    </div>
  )
})