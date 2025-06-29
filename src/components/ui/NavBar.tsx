'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import NavButton from './NavButton';


export default function NavBar() {
  
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', id: 'nav-home', label: 'Home' },
    { href: '#about', id: 'nav-about', label: 'About Me' },
    { href: '#skills', id: 'nav-skills', label: 'Skills' },
    { href: '#journey', id: 'nav-journey', label: 'My Journey' },
    { href: '#projects', id: 'nav-projects', label: 'Projects' },
    { href: '#contact', id: 'nav-contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="fixed top-6 right-8 z-60">
        <button
          onClick={() => setOpen(!open)}
          className="text-indigo-200 hover:text-white transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <span className={`inline-block transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}>
            <Bars3Icon className="w-8 h-8" />
          </span>
          <span className={`absolute top-0 left-0 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}>
            <XMarkIcon className="w-8 h-8" />
          </span>
        </button>
      </div>

      {open && (
        <div
          className='relative top-0 right-0 min-h-screen bg-gray-950/50 transition-transform duration-300 ease-in'
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-[40%] bg-gray-950/90 backdrop-blur-md border-l-1 border-purple-900 shadow-lg shadow-purple-900/50 transition-transform duration-300 ease-out z-50 ${
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 font-bold sm:text-xl md:text-2xl text-indigo-400">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavButton
                href={item.href}
                id={item.id}
                label={item.label}
                isActive={item.id === 'nav-home'} 
                onClick={() => setOpen(false)}
              />
            </li>
          ))}
        </ul>

        <button
          id="lang-toggle"
          className="fixed bottom-6 left-10 flex justify-center items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-200 transition-colors duration-300"
        >
          <GlobeAltIcon className="w-5 h-5" />
          <span className="lang-label">ES</span>
        </button>
      </div>
    </>
  );
}