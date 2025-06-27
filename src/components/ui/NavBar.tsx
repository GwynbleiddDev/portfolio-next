import Link from "next/link";


export default function NavBar() {
  return (
    <nav 
      className="fixed top-0 left-0 w-full bg-gray-950 backdrop-blur-md z-50 shadow-lg shadow-purple-900/50 border-b-1 border-purple-900"
    >
      <ul 
        className="flex justify-center gap-4 md:gap-0 py-4 md:py-0 md:flex-row flex-col md:items-center font-bold"
      >
        <li className="active">
          <Link
            href="#home"
            id="nav-home"
            className="nav-link text-indigo-400 hover:text-indigo-200"
          >Home</Link>
        </li>
        
        <li>
          <Link
            href="#about"
            id="nav-about"
            className="nav-link text-indigo-400 hover:text-indigo-200"
          >About Me</Link>
        </li>
        
        <li>
          <Link
            href="#skills"
            id="nav-skills"
            className="nav-link text-indigo-400 hover:text-indigo-200"
          >Skills</Link>
        </li>
        
        <li>
          <Link
            href="#journey"
            id="nav-journey"
            className="nav-link text-indigo-400 hover:text-indigo-200"
          >My Journey</Link>
        </li>
        
        <li>
          <Link
            href="#projects"
            id="nav-projects"
            className="nav-link text-indigo-400 hover:text-indigo-200"
          >Projects</Link>
        </li>
        
        <li>
          <Link
            href="#contact"
            id="nav-contact"
            className="nav-link text-indigo-400 hover:text-indigo-200"
          >Contact</Link>
        </li>
      </ul>

      <button
        id="lang-toggle"
        className="fixed border-1 border-purple-900 rounded-lg top-4 right-6 p-4 md:p-2 md:top-0 md:right-2 lg:right-4 md:border-0 font-bold text-xl text-indigo-400 hover:text-indigo-200 transition-colors duration-300"
      >
        <span className="lang-label">ES</span>
      </button>
    </nav>
  );
}
