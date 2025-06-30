import { StarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";


export default function WelcomeToggle({ isOpen }: {isOpen : boolean}) {
  
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }

  return (
    <>
      <div className="fixed z-60 top-10 left-10">
        <button
          onClick={handleClick}
          className="text-indigo-200 hover:text-white transition-colors duration-500 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`inline-block transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <StarIcon className="w-8 h-8 md:w-10 md:h-10" />
          </span>
        </button>
      </div>
    </>
  )
}