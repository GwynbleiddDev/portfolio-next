import NavButton from "./NavButton";


export default function NavBar() {

  const navItems = [
    { href: '#home', id: 'nav-home', label: 'Home' },
    { href: '#about', id: 'nav-about', label: 'About Me' },
    { href: '#skills', id: 'nav-skills', label: 'Skills' },
    { href: '#journey', id: 'nav-journey', label: 'My Journey' },
    { href: '#projects', id: 'nav-projects', label: 'Projects' },
    { href: '#contact', id: 'nav-contact', label: 'Contact' },
  ]

  return (
    <nav 
      className="fixed top-0 left-0 w-full bg-gray-950 backdrop-blur-md z-50 shadow-lg shadow-purple-900/50 border-b-1 border-purple-900"
    >
      <ul 
        className="flex justify-center gap-4 md:gap-0 py-4 md:py-0 md:flex-row flex-col md:items-center font-bold"
      >
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            href={item.href}
            id={item.id}
            label={item.label}
            isActive={item.id === 'nav-home'} // TODO: trabajar en la barra
          />
        ))}
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
