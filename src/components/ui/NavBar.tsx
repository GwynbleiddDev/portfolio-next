'use client'

import { useState, useEffect, useCallback } from 'react';
import { useLenis } from 'lenis/react';
import NavOverlay from '../extras/NavOverlay';
import NavToggle from './NavToggle';
import NavMenu from './NavMenu';
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useActiveSection } from '@/hooks/useActiveSection';
import HeroToggle from './HeroToggle';


export default function NavBar() {
  
  const [ open, setOpen ] = useState(false)
  const [ isAnimating, setIsAnimating ] = useState<'opening' | 'closing' | null>(null)
  
  const [ activeSection, setActiveSection ] = useActiveSection('#hero')
  
  const lenis = useLenis()

  // scroll / overflow
  useEffect(() => {
    if (open) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [open, lenis])

  const handleOpen = useCallback(() => {
    setIsAnimating('opening')
    setTimeout(() => {
      setOpen(true)
      setIsAnimating(null)
    }, 10)
  }, [])

  const handleClose = useCallback(() => {
    setIsAnimating('closing')
    setOpen(false)
    setTimeout(() => setIsAnimating(null), 500)
  }, [])

  return (
    <>
      <NavOverlay
        isOpen={open}
        isOpening={isAnimating === 'opening'}
        isClosing={isAnimating === 'closing'}
      />
      <header>
        <NavToggle isOpen={open} onToggle={open ? handleClose : handleOpen} />
        <NavMenu
          isOpen={open}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onClose={handleClose}
        />

        <HeroToggle isOpen={open} />
      </header>

      {/* <ChevronDownIcon className="h-12 w-12 text-indigo-200 absolute bottom-0 left-1/2" /> */}
    </>
  )
}