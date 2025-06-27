import Image from "next/image"
import Link from "next/link"

type ProjectCardProps = {
  name: string,
  link: string,
  image: string,
  type: string
}

export default function ProjectCard({name, link, image, type}: ProjectCardProps) {
  return (
    <div
      className="bg-[#0d0d0d] border sm:p-8 md:p-6 border-indigo-500/50 rounded-lg p-6"
      data-aos="fade-up"
    >
      <h3 
        className="text-2xl font-semibold text-indigo-300 mb-4"
      >{name}</h3>
          <Link 
            href={`${link}`} 
            target="_blank"
          >
            <Image 
              className="proyecto-card rounded-xl" 
              src={`${image}`} 
              alt="imagen proyecto"
            />
          </Link>
          <p className="text-gray-400 text-xl mt-6">{type}</p>
    </div>
  )
}