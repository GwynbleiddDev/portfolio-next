import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { useLanguage } from "@/context/LanguageContext"


export default function LangToggle({handleClose} : {handleClose: () => void}) {

  const { language, setLanguage } = useLanguage()

  const handleToggle = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
    handleClose()
  }
  
  return (
      <button
        onClick={handleToggle}
        className="fixed bottom-8 left-10 flex justify-center items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-200 transition-colors duration-300"
      >
        <GlobeAltIcon className="w-5 h-5" />
        <span className="lang-label">
          {language === 'en' ? 
            'Cambiar a Español' : 
            'Change to English'
          }
        </span>
      </button>
  )
}
