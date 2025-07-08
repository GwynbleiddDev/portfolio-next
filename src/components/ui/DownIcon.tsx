import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";


interface DownIconProps {
  contactRef: HTMLDivElement | null;
}

export default function DownIcon({ contactRef }: DownIconProps) {
  
  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef && chevronRef.current) {
        const rect = contactRef.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        chevronRef.current.style.opacity = inView ? '0' : '1';
      }
    };
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      ref={chevronRef}
      className="fixed transition-opacity duration-500 bottom-0 right-1/2 translate-x-1/2"
    >
      <ChevronDownIcon
        id="chevron-down-icon"
        className="h-12 w-12 text-indigo-200 arrow"
      />
    </div>
  );
}
