'use client';

import { useState, useEffect, useCallback, RefObject } from 'react';
import NavOverlay from '../extras/NavOverlay';
import NavToggle from './NavToggle';
import NavButton from './NavButton';
import HeroToggle from './HeroToggle';
import LangToggle from './LangToggle';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { useLenis } from 'lenis/react';
import { useLanguage } from '@/context/LanguageContext';
import AnimationSwitch from './AnimationSwitch';
import { useAnimation } from '@/context/AnimationContext';


type NavBarProps = {
  heroRef: RefObject<HTMLDivElement | null>
  aboutRef: RefObject<HTMLDivElement | null>
  skillsRef: RefObject<HTMLDivElement | null>
  journeyRef: RefObject<HTMLDivElement | null>
  projectsRef: RefObject<HTMLDivElement | null>
  contactRef: RefObject<HTMLDivElement | null>
};

type NavItem = {
  href: string;
  id: string;
  label: string;
  ref: RefObject<HTMLDivElement | null>;
};

export default function NavBar(
  { heroRef, aboutRef, skillsRef, journeyRef, projectsRef, contactRef } : NavBarProps
) {

  const { animationsEnabled } = useAnimation()
  
  const [ open, setOpen ] = useState(false);
  const [ isAnimating, setIsAnimating ] = useState<'opening' | 'closing' | null>(null);
  const [ activeSection, setActiveSection ] = useActiveSection({
    defaultSection: '#hero',
    refs: [ heroRef, aboutRef, skillsRef, journeyRef, projectsRef, contactRef ],
  });
  const lenis = useLenis()
  const scrollToSection = useScrollToSection()

  const { t } = useLanguage()

  const navItems: NavItem[] = [
    { href: '#about', id: 'nav-about', label: t.about.title, ref: aboutRef },
    { href: '#skills', id: 'nav-skills', label: t.skills.title, ref: skillsRef },
    { href: '#journey', id: 'nav-journey', label: t.journey.title, ref: journeyRef },
    { href: '#projects', id: 'nav-projects', label: t.projects.title, ref: projectsRef },
    { href: '#contact', id: 'nav-contact', label: t.contact.title, ref: contactRef },
  ];

  useEffect(() => {
    if (lenis && open) {
      lenis.stop()
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start()
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start()
      document.body.style.overflow = '';
    }
  }, [ lenis, open ]);

  const handleOpen = useCallback(() => {
    setIsAnimating('opening')
    setTimeout(() => {
      setOpen(true);
      setIsAnimating(null);
    }, 10)
  }, []);

  const handleClose = useCallback(() => {
    setIsAnimating('closing');
    setOpen(false);
    setTimeout(() => setIsAnimating(null), 500);
  }, []);

  const handleScroll = useCallback((sectionRef: RefObject<HTMLDivElement | null>, href: string) => {
    scrollToSection({
      sectionRef,
      href, 
      offset: animationsEnabled ? 450 : 0,
      setActiveSection,
    })
    handleClose()
  }, [ animationsEnabled, scrollToSection, setActiveSection, handleClose ]
  )

  return (
    <header>
      <NavOverlay
        isOpen={open}
        isOpening={isAnimating === 'opening'}
        isClosing={isAnimating === 'closing'}
      />
      
      <NavToggle 
        isOpen={open} 
        onToggle={open ? handleClose : handleOpen} 
      />
      
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] md:w-[30%] bg-gray-950/90 backdrop-blur-md border-l-1 border-purple-900 shadow-lg transition-transform duration-300 ease-in-out z-50 ${
          open ? 'translate-x-0 shadow-purple-900/50' : 'translate-x-full'
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
                onClick={() => handleScroll(item.ref, item.href)}
              />
            </li>
          ))}
        </ul>

        <AnimationSwitch />
        
        <LangToggle 
          handleClose={handleClose}
        />
      </div>
      
      <HeroToggle 
        isOpen={open} 
        heroRef={heroRef} 
        setActiveSection={setActiveSection} 
      />
    </header>
  );
}