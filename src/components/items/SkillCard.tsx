import Image from "next/image";


type SkillCardProps = {
  name: string
  image: string
}

export default function SkillCard({name, image}: SkillCardProps) {
  return (
    <div className="flex flex-col items-center"> 
      
      <Image 
        className="w-15 h-auto"
        src={`/assets/skills/${image}.svg`} 
        alt={`imagen ${name}`}
        width={150}
        height={100}
      />
      <p className="sm:text-sm">{name}</p>
      
    </div>

  )
}