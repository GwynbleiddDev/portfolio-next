import Image from 'next/image';
import Heading from '../ui/Heading';
import Footer from './Footer';


export default function Contact() {
  
  const socialNetworks = [
    {
      name: 'LinkedIn',
      image: 'linkedin',
      link: 'https://www.linkedin.com/in/alejandro-valera-80bab42b1',
    },
    {
      name: 'GitHub',
      image: 'github',
      link: 'https://github.com/GwynbleiddDev',
    },
    {
      name: 'Gmail',
      image: 'gmail',
      link: 'mailto:ale24vv@gmail.com',
    },
    {
      name: 'Netlify',
      image: 'netlify',
      link: 'https://app.netlify.com/teams/ale24vv/sites',
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-transparent relative z-10 p-4 md:p-7"
    >

      <div className="max-w-6xl mx-auto text-center bg-gray-950/40 p-6 md:p-8 shadow-lg shadow-purple-900/50 border border-purple-900 rounded-lg mb-8 md:mb-20">
        <Heading 
          color="text-purple-400" 
          mb="mb-6 md:mb-8">
          Contact
        </Heading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
          {socialNetworks.map((socialN) => (
            <a
              key={socialN.name}
              href={socialN.link}
              className="flex flex-col items-center text-gray-300 hover:text-purple-200 transition-colors duration-300"
            >
              <Image
                className="w-10 sm:w-12 md:w-14 h-auto mb-2 md:mb-4"
                src={`/assets/redes/${socialN.image}.svg`}
                alt={`logo ${socialN.name}`}
                width={100}
                height={100}
              />
              <span className="text-sm md:text-base">{socialN.name}</span>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}