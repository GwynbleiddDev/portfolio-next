import ProjectCard from "../items/ProjectCard"
import ProjectItems from "../items/ProjectItems"
import { projects } from "@/data/projects"
import Heading from "../ui/Heading"


export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center p-4 md:p-6 bg-transparent relative z-10"
    >
      <div
        className="max-w-6xl mx-auto p-8 md:p-4 text-center bg-gray-950/20 shadow-lg border-1 rounded-lg border-purple-900 shadow-purple-900"
        data-aos="fade-up"
      >
          <Heading
            color="text-indigo-400"
            mb="mb-8"
          >Projects</Heading>

        <div
          id="projectGrid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {projects.map(project => (
            <ProjectCard 
              key={project.name}
              name={project.name}
              image={project.image}
              link={project.link}
              type={project.type}
            />
          ))}

          <ProjectItems 
            link='https://github.com/GwynbleiddDev?tab=repositories'
            image="/assets/redes/github.svg"
            name='Github Repositories'
          />

          <ProjectItems 
            link="https://app.netlify.com/teams/ale24vv/sites"
            image="/assets/redes/netlify.svg"
            name='Projects Deployments'
          />
        </div>
      </div>
    </section>
  );
}
