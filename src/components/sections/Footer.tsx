import { useLanguage } from "@/context/LanguageContext";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";


export default function Footer() {

  const { t } = useLanguage();

  return (
    <div
      className="z-10 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between z-10 items-center gap-4 px-4 mb-5">
        
        <div className="bg-gray-950/60 border rounded-lg border-purple-900 py-6 px-10 text-center shadow-purple-900/80">
          <p className="text-gray-300 text-sm md:text-base">
            © 2025 Alejandro Valera. {t.footer.rights}
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-gray-950/60 border rounded-lg border-purple-900 shadow-purple-900/80 p-6 gap-4 items-center">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-200 text-sm md:text-base transition-colors duration-300 flex items-center gap-2"
          >
            <ArrowDownCircleIcon className="h-7 w-7 text-gray-200" />
            <p>{t.footer.cv}</p>
          </a>
          
          <span className="text-gray-400 text-xs md:text-sm italic">
            Powered by retro-futuristic vibes
          </span>
        </div>
      </div>
    </div>
  )
}