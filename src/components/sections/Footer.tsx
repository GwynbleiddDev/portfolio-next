export default function Footer() {


  return (
    <footer
      id="footer"
      className="z-10 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 mb-5">
        
        <div className="bg-gray-950/60 border rounded-lg border-purple-900 py-6 px-10 text-center shadow-purple-900/80">
          <p className="text-gray-300 text-sm md:text-base">
            © 2025 Alejandro Valera. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-gray-950/60 border rounded-lg border-purple-900 shadow-purple-900/80 p-6 gap-4 items-center">
          <a
            href="https://drive.google.com/drive/folders/1xe8sUbS3ZVCWrYPO9ETUzqaDT9aJTtHi?usp=sharing"
            className="text-indigo-400 hover:text-indigo-200 text-sm md:text-base transition-colors duration-300 flex items-center gap-2"
          >
            
            <svg
              className="w-6 md:w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              
              <path
                fill="#ffffff"
                d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z"
              />
            </svg>
            
            <p id="text-cv">Download my CV (PDF)</p>
          </a>
          
          <span className="text-gray-400 text-xs md:text-sm italic">
            Powered by retro-futuristic vibes
          </span>
        </div>
      </div>
    </footer>
  )
}