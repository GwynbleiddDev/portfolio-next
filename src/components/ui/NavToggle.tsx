'use client';

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars2Icon } from "@heroicons/react/24/outline";



interface NavToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}


export default function NavToggle({ isOpen, onToggle }: NavToggleProps) {
  return (
    <div className="fixed z-60 top-10 right-10">
      <button
        onClick={onToggle}
        className="text-indigo-200 hover:text-white transition-colors duration-500 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span className={`inline-block transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <Bars2Icon className="w-8 h-8 md:w-12 md:h-12" />
        </span>
        <span className={`absolute top-0 left-0 transition-opacity duration-500 bg-gray-100/10 rounded-full p-2 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <XMarkIcon className="w-8 h-8 md:w-10 md:h-10 " />
        </span>
      </button>
    </div>
  );
}