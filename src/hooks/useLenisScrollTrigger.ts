'use client';

import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export function useLenisScrollTrigger() {
  
  const lenis = useLenis();
  const [scroller, setScroller] = useState<HTMLElement | Window | null>(null);

  useEffect(() => {
    const setupScroller = () => {
      if (lenis) {
        lenis.on('scroll', () => {
          ScrollTrigger.update();
        })
        ScrollTrigger.scrollerProxy(document.body, {
          scrollTop(value) {
            if (value !== undefined) lenis.scrollTo(value, { immediate: true })
            return lenis.scroll || 0;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          }, pinType: document.body.style.transform ? 'transform' : 'fixed',
        });
        ScrollTrigger.refresh()
        setScroller(document.body)
      } else if (typeof window !== 'undefined') {
        ScrollTrigger.scrollerProxy(window, {
          scrollTop(value) {
            if (value !== undefined) window.scrollTo(0, value)
            return window.scrollY || 0
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          },
        })
        ScrollTrigger.refresh()
        setScroller(window)
      }
    }
    setupScroller()
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); //limpia
      if (lenis) lenis.off('scroll', ScrollTrigger.update)
    }
  }, [lenis])
  return scroller
}