import Image from "next/image";
import Heading from "../ui/Heading";

export default function MyJourney() {
  return (
    <section
      id="journey"
      className="min-h-screen flex items-center justify-end bg-transparent relative z-10"
    >
      <div
        className="max-w-6xl mx-6 md:mx-20 gap-4 md:gap-10 p-4 md:p-10 flex flex-col md:flex-row items-center bg-gray-950 shadow-lg shadow-purple-900/50 rounded-lg border-1 border-purple-900"
      >
        <div>
          <Image
            className="sm:w-full md:w-500 lg:w-1000 rounded-lg"
            src="/assets/index/journey.gif"
            alt="journey gif"
            width={100}
            height={200}
            unoptimized
          />
        </div>

        <div className="text-center md:text-right">
          
          <Heading
            color="text-blue-500"
            mb="mb-6"
          >My Journey</Heading>

          <p className="text-lg text-gray-300">
            I completed courses on platforms like Udemy where I learned to build
            web applications from scratch. I mastered creating responsive
            websites, languages like JavaScript and Typescript, Frameworks like React and Nextjs 
            and building databases with MySQL and connecting APIs.
            Currently, I am exploring Next.js and Nest.js to expand my skills.
          </p>
        </div>
      </div>
    </section>
  );
}
