

export default function HeroToggle({ isOpen }: {isOpen : boolean}) {
  
  const handleClick = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' })
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
            <h3 className="title text-2xl md:text-3xl tracking-[-0.075em] text-indigo-200">AV</h3>
          </span>
        </button>
      </div>
    </>
  )
}
