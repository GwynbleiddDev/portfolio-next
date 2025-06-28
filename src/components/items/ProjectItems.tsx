import Image from "next/image";


export default function ProjectItems() {
  return (
    <>
      <div
        className="bg-[#0d0d0d] md:max-h-47 border p-8 border-indigo-500/50 rounded-lg row-start-9 row-end-10 sm:row-start-5 sm:row-end-6 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 lg:col-start-1 lg:col-end-3 lg:row-start-3"
      >
        <a
          className="mx-auto mb-4"
          href="https://github.com/GwynbleiddDev?tab=repositories"
        >
          <Image
            className="mx-auto md:w-20 lg:w-20 mb-4"
            src="/assets/redes/github.svg"
            alt="logo github"
            width={150}
            height={100}
          />
          <p id="go-github" className="text-2xl font-semibold text-indigo-300">
            Github Repositories
          </p>
        </a>
      </div>

      <div
        className="bg-[#0d0d0d] md:max-h-47 border p-8 border-indigo-500/50 rounded-lg row-start-10 row-end-11 sm:row-start-5 sm:row-end-6 sm:col-start-2 sm:col-end-3 md:col-start-2 md:col-end-3 md:row-start-4 md:row-end-5 lg:col-start-3 lg:col-end-5 lg:row-start-3"
      >
        <a
          className="mx-auto mb-4"
          href="https://app.netlify.com/teams/ale24vv/sites"
        >
          <Image
            src="/assets/redes/netlify.svg"
            className="mx-auto md:w-20 lg:w-20 mb-4"
            alt="logo netlify"
            width={150}
            height={100}
          />
          <p 
            id="go-netlify" 
            className="text-2xl font-semibold text-indigo-300"
          >
            Netlify Deployments
          </p>
        </a>
      </div>
    </>
  )
}