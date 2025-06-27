import ProjectCard from "../items/ProjectCard";
import ProjectItems from "../items/ProjectItems";
import { projects } from "@/data/projects";
import Heading from "../ui/Heading";

export default function Projects() {
  return (
    <main
      id="projects"
      className="min-h-screen overflow-hidden flex items-center p-4 md:p-6 bg-transparent relative z-10"
    >
      <div
        className="max-w-6xl mx-6 md:mx-auto p-10 md:p-4 text-center bg-gray-950/20 shadow-lg border-1 rounded-lg border-purple-900 shadow-purple-900"
        data-aos="fade-up"
      >
          <Heading
            color="indigo"
            mb="12"
            aos='fade-up'
          >Projects</Heading>

        <div
          id="projectGrid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
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

          <ProjectItems />
        </div>
      </div>
    </main>
  );
}
