'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

type UseActiveSectionProps = {
  defaultSection?: string
  refs: Array<RefObject<HTMLDivElement | null>>
}

export function useActiveSection({ defaultSection = '#hero', refs }: UseActiveSectionProps) {
  
  const [activeSection, setActiveSection] = useState(defaultSection)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const manuallySetSection = useRef<string | null>(null)

  const setActiveSectionWithPriority = (href: string, isManual: boolean = false) => {
    if (isManual) {
      manuallySetSection.current = href;
      setActiveSection(href);
      if (href === '#hero') {
        window.history.replaceState(null, '', window.location.pathname);
      } else if (window.location.hash !== href) {
        window.history.replaceState(null, '', href);
      }
    } else if (!manuallySetSection.current) {
      setActiveSection(href);
      if (href === '#hero') {
        window.history.replaceState(null, '', window.location.pathname);
      } else if (window.location.hash !== href) {
        window.history.replaceState(null, '', href);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let highestRatio = 0;
        let visibleSection = '';
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > highestRatio && !manuallySetSection.current) {
            highestRatio = entry.intersectionRatio;
            const sectionId = entry.target.id;
            visibleSection = sectionId ? `#${sectionId}` : '#hero';
          }
        });
        if (visibleSection) {
          setActiveSectionWithPriority(visibleSection);
        }
      },
      {
        root: null,
        threshold: [ 0.1, 0.2, 0.3, 0.4 ], 
        rootMargin: '-400px 0px -20% 0px', 
      }
    )
    observerRef.current = observer

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    if (!window.location.hash || window.location.hash === '#hero') { // clean pathname
      setActiveSectionWithPriority('#hero');
    } else {
      setActiveSectionWithPriority(window.location.hash);
    }

    const timeout = setTimeout(() => {
      manuallySetSection.current = null
    }, 1000)

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [defaultSection, refs])

  return [activeSection, setActiveSectionWithPriority] as const;
}