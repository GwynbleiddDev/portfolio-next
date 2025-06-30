import Image from "next/image"

type ProjectCardProps = {
  name: string,
  link: string,
  image: string,
  type: string
}

export default function ProjectCard({name, link, image, type}: ProjectCardProps) {
  return (
    <div
      className="bg-[#0d0d0d] border py-2 border-indigo-500/50 rounded-lg flex flex-col items-center"
      
    >
      <h3 
        className="text-xl font-semibold text-indigo-300"
      >{name}</h3>
          <a 
            href={`${link}`} 
            target="_blank"
          >
            <Image 
              className="my-2 rounded-xl" 
              src={`/assets/projects/${image}.png`} 
              alt="imagen proyecto"
              width={150}
              height={100}
            />
          </a>
          <p className="text-gray-400 text-sm">{type}</p>
    </div>
  )
}