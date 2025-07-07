'use client';

import NavButton from './NavButton';
import LangToggle from './LangToggle';


type NavItem = {
  href: string;
  id: string;
  label: string;
}

type NavMenuProps = {
  isOpen: boolean;
  activeSection: string;
  setActiveSection: (href: string) => void;
  onClose: () => void;
}


export default function NavMenu({ isOpen, activeSection, setActiveSection, onClose }: NavMenuProps) {
  
  const navItems: NavItem[] = [
    { href: '#about', id: 'nav-about', label: 'About Me' },
    { href: '#skills', id: 'nav-skills', label: 'Skills' },
    { href: '#journey', id: 'nav-journey', label: 'My Journey' },
    { href: '#projects', id: 'nav-projects', label: 'Projects' },
    { href: '#contact', id: 'nav-contact', label: 'Contact' },
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[40%] md:w-[30%] bg-gray-950/90 backdrop-blur-md border-l-1 border-purple-900 shadow-lg transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0 shadow-purple-900/50' : 'translate-x-full'
      }`}
    >
      <ul className="flex flex-col items-center justify-center h-full gap-8 font-bold sm:text-xl md:text-2xl text-indigo-400">
        
        {navItems.map((item) => (
          <li key={item.id}>
            <NavButton
              href={item.href}
              id={item.id}
              label={item.label}
              isActive={activeSection === item.href}
              onClick={() => {
                setActiveSection(item.href)
                onClose()
              }}
            />
          </li>
        ))}
      </ul>

      <LangToggle />
    </div>
  )
}