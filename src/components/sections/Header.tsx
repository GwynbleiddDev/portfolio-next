

export default function Header() {
  return (
      <header
        id="home"
        className="min-h-screen flex items-center justify-center bg-transparent relative z-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-gray-950/50 rounded-2xl py-4 shadow-purple-900/90 border-1 border-purple-900">
          <div className="text-center items-center md:text-left px-2">
            <div className="heading flex justify-center md:mx-4 mb-4 lg:mx-6">
              <h1 className="glitch" data-text="ALEJANDRO_VALERA">
                ALEJANDRO_VALERA
              </h1>
              <h1 className="glow">ALEJANDRO_VALERA</h1>
            </div>
            <p className="subtitle text-indigo-400 text-1xl text-center">
              FRONT-END DEVELOPER
            </p>
          </div>

          <div className="scanlines"></div>
        </div>
      </header>
  )
}