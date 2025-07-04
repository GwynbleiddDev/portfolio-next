import Image from "next/image";
import React, { Ref, forwardRef } from "react";


type SkillCardProps = {
  name: string
  image: string
}

export default forwardRef( function SkillCard(
  { name, image }: SkillCardProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div 
      ref={ref} 
      className="flex flex-col items-center"
    >
      <Image
        className="w-12 md:w-15 h-auto"
        src={`/assets/skills/${image}.svg`}
        alt={`imagen ${name}`}
        width={150}
        height={100}
      />
      <p className="text-sm md:text-[.9rem]">{name}</p>
    </div>
  )
})