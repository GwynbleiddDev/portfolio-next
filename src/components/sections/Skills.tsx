import { skills } from "@/data/skills";
import SkillCard from "../items/SkillCard";
import Heading from "../ui/Heading";


export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-transparent relative z-10 p-7"
    >
      <div
        className="max-w-6xl mx-auto text-center bg-gray-950/40 p-6 shadow-lg shadow-purple-900/50 border-1 border-purple-900 rounded-lg"
        data-aos="fade-up"
      >

        <Heading
          color="indigo"
          mb="12"
          aos="fade-up"
        >Skills</Heading>

        <div
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-6 md:gap-12 mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skills.map((skill) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              image={skill.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
