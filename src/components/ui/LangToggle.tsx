import { GlobeAltIcon } from "@heroicons/react/24/outline"


export default function LangToggle() {
  return (
      <button
        id="lang-toggle"
        className="fixed bottom-6 left-10 flex justify-center items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-200 transition-colors duration-300"
      >
        <GlobeAltIcon className="w-5 h-5" />
        <span className="lang-label">ES</span>
      </button>
  )
}
