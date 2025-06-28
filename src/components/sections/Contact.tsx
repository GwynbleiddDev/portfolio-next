import Image from "next/image";
import Heading from "../ui/Heading";

export default function Contact() {

  const socialNetworks = [
    {
      name: 'LinkedIn',
      image: 'linkedin',
      link: 'https://www.linkedin.com/in/alejandro-valera-80bab42b1'
    },
      {
      name: 'GitHub',
      image: 'github',
      link: 'https://github.com/GwynbleiddDev'
    },
    {
      name: 'Gmail',
      image: 'gmail',
      link: 'mailto:ale24vv@gmail.com'
    },
    {
      name: 'Netlify',
      image: 'netlify',
      link: 'https://app.netlify.com/teams/ale24vv/sites'
    }
  ]

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-transparent relative z-10 p-4"
    >
      <div className="max-w-4xl mx-auto p-6 text-center bg-gray-950/40 shadow-lg shadow-purple-900/50 rounded-lg border-1 border-purple-900">
        
        <Heading
          color="text-purple-400"
          mb="mb-6"
        >Contact</Heading>

        <p className="mb-4 mt-4">Toach the icons for contact me!</p>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 justify-center md:p-8 gap-8 md:gap-20 lg:gap-40 md:mb-6"
          data-aos="fade-up"
        >
          {socialNetworks.map(socialN => (
            <a
              key={socialN.name}
              href={socialN.link}
              className="w-20 text-xl"
            >
              <Image
                className="w-10 sm:w-15 mx-auto mt-4 md:mt-auto mb-2 md:mb-4"
                src={`/assets/redes/${socialN.image}.svg`}
                alt={`logo ${socialN.name}`}
                width={100}
                height={100}
              />
              {socialN.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
