import { useAnimation } from "@/context/AnimationContext";
import { useLanguage } from "@/context/LanguageContext";


export default function AnimationSwitch() {
  
  const { animationsEnabled, toggleAnimations } = useAnimation()

  const { t } = useLanguage()

  const handleToggle = () => {
    toggleAnimations();
    window.location.reload()
  }

  return (
    <div className="fixed top-12 lg:top-auto lg:bottom-8 left-10 lg:left-auto lg:right-6 cursor-pointer rounded-full ">
      <label className="flex flex-col gap-2 items-center justify-center cursor-pointer">
        <input 
          type="checkbox"  
          className="sr-only peer"
          checked={!animationsEnabled}
          onChange={handleToggle}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-400"></div>
        <span className="mx-2 font-bold text-sm text-indigo-400">
          {t.switch.text}
        </span>
      </label>
    </div>
  );
}
