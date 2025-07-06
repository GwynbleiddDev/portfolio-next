import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";


export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
      <div className="bg-gray-950/60 border border-purple-900 py-4 px-6 md:px-10 rounded-lg shadow-purple-900/80">
        <p className="text-gray-300 text-sm md:text-base">
          © 2025 Alejandro Valera. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-950/60 border border-purple-900 rounded-lg shadow-purple-900/80 p-4 md:p-6">
        <a
          href="https://drive.google.com/drive/folders/1xe8sUbS3ZVCWrYPO9ETUzqaDT9aJTtHi?usp=sharing"
          className="text-indigo-400 hover:text-indigo-200 text-sm md:text-base transition-colors duration-300 flex items-center gap-2"
        >
          <ArrowDownCircleIcon className="h-6 w-6 md:h-7 md:w-7 text-gray-200" />
          <p id="text-cv">Download my CV (PDF)</p>
        </a>
        <span className="text-gray-400 text-xs md:text-sm italic">
          Powered by retro-futuristic vibes
        </span>
      </div>
    </div>
  )
}