'use client'

import { useState, useEffect, useCallback } from 'react';
import { useLenis } from 'lenis/react';
import NavOverlay from '../extras/NavOverlay';
import NavToggle from './NavToggle';
import NavMenu from './NavMenu';
import { useActiveSection } from '@/hooks/useActiveSection';
import WelcomeToggle from './WelcomeToggle';


export default function NavBar() {
  
  const [ open, setOpen ] = useState(false)
  const [ isAnimating, setIsAnimating ] = useState<'opening' | 'closing' | null>(null)
  
  const [ activeSection, setActiveSection ] = useActiveSection('#welcome')
  
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

        <WelcomeToggle isOpen={open} />
      </header>
    </>
  )
}