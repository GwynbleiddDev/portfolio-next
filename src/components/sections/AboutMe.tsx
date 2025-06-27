import City from "../extras/City";
import Heading from "../ui/Heading";


export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-start items-center bg-transparent relative z-10"
    >
      <div
        className="max-w-6xl p-6 mx-6 md:mx-20 border-1 border-purple-900 flex flex-col md:flex-row items-center gap-8 bg-gray-950 shadow-lg shadow-purple-900/50 rounded-lg"
        data-aos="fade-right"
      >
        <div className="md:w-1/3 text-center md:text-left" data-aos="fade-right">
          
          <Heading
            color="purple"
            mb="8"
          >About Me</Heading>
          
          <p className="text-lg text-gray-300">
            I am a front-end developer in training, passionate about creating
            modern and responsive interfaces. Through intensive courses, I have
            mastered languages like JavaScript and TypeScript and technologies
            like Tailwind, and I am ready to apply them in real projects.
          </p>
        </div>

        <div
          className="md:w-2/3 w-full flex flex-center mx-auto"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <City />
        </div>
      </div>
    </section>
  );
}
