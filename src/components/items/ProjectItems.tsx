import Image from "next/image";


export default function ProjectItems({link, image, name}: {link: string, image: string, name: string}) {
  return (
    <>
      <div
        className="bg-[#0d0d0d] flex flex-col justify-center items-center md:max-h-50 border p-8 border-indigo-500/50 rounded-lg"
      >
        <a
          className="mx-auto mb-4"
          href={link}
        >
          <p id="go-github" className="text-xl font-semibold text-indigo-300">
            {name}
          </p>
          <Image
            className="mx-auto max-w-20 lg:w-15 mt-2"
            src={image}
            alt={name}
            width={150}
            height={100}
          />
        </a>
      </div>
    </>
  )
}